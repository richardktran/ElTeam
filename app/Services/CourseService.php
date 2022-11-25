<?php

namespace App\Services;

use App\Events\CourseInvitationEvent;
use App\Mail\CourseInvitationMail;
use App\Models\Course;
use App\Models\CourseStudent;
use App\Models\Curriculum;
use App\Models\Group;
use App\Models\User;
use App\Supports\Utils\Math;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Facades\Excel;

class CourseService
{
    /**
     * @param mixed $teacherId
     * @param array $params
     * @return LengthAwarePaginator
     */
    public function getAllOwnCourses($teacherId, array $params = []): LengthAwarePaginator
    {
        $pageSize = $params['pageSize'] ?? config('services.pagination.items_per_page');
        $courses = Course::where('teacher_id', $teacherId)
            ->orderBy('created_at', 'desc')
            ->paginate($pageSize);

        return $courses;
    }

    public function getAllLearningCourses($userId, array $params = []): LengthAwarePaginator
    {
        $pageSize = $params['pageSize'] ?? config('services.pagination.items_per_page');
        $courses = Course::whereHas('students', function ($student) use ($userId) {
            $student->where('user_id', $userId)
                ->whereNotIn('course_student.status', [CourseStudent::STATUS_DECLINED]);
        })
            ->orderBy('created_at', 'desc')
            ->paginate($pageSize);

        return $courses;
    }

    public function memberList(Course $course)
    {
        $members = $course->students;

        // Get group name of each member
        $members = $members->map(function ($member) use ($course) {
            $group = $member->groups()->where('course_id', $course->id)
                ->first(['groups.id', 'number', 'name', 'is_leader']);
            $member->group = $group ?? null;
            return $member;
        })->sortBy('group.number');

        // Sort member with order status ACCEPTED, PENDING, DECLINED
        $members = $members->sortBy(function ($member) {
            return $member->pivot->status;
        });

        // Sort member collection with DECLINED status to the end of collection
        $members = $members->filter(function ($member) {
            return $member->pivot->status !== CourseStudent::STATUS_DECLINED;
        })->merge($members->filter(function ($member) {
            return $member->pivot->status === CourseStudent::STATUS_DECLINED;
        }));


        return $members;
    }

    public function createCourse(array $data)
    {
        $course = Course::create($data);

        return $course;
    }

    public function inviteStudents(Course $course, array $data)
    {
        $students = $data['students'];

        // Add students email to Database
        foreach ($students as $student) {
            $student = User::firstOrCreate([
                'email' => $student
            ]);

            $existingStudent = CourseStudent::where('course_id', $course->id)
                ->where('user_id', $student->id)
                ->first();

            if (!$existingStudent) {
                $course->students()->attach($student, [
                    'status' => CourseStudent::STATUS_PENDING
                ]);
            }
        }

        // CourseInvitationEvent::dispatch($course, $students);

        return $course;
    }

    public function removeInvite(Course $course)
    {
        // Detach all students with status PENDING
        $course->students()->wherePivot('status', CourseStudent::STATUS_PENDING)->detach();
        $course->students()->wherePivot('status', CourseStudent::STATUS_DECLINED)->detach();

        return $course;
    }

    public function acceptCourse(Course $course, $user)
    {
        $courseStudent = CourseStudent::where('course_id', $course->id)
            ->where('user_id', $user->id)
            ->first();

        if ($courseStudent) {
            $courseStudent->status = CourseStudent::STATUS_ACCEPTED;
            $courseStudent->save();
        }

        return $course;
    }

    public function declineCourse(Course $course, $user)
    {
        $courseStudent = CourseStudent::where('course_id', $course->id)
            ->where('user_id', $user->id)
            ->first();

        if ($courseStudent) {
            $courseStudent->status = CourseStudent::STATUS_DECLINED;
            $courseStudent->save();
        }

        return $course;
    }

    public function createOrUpdateCurriculum(Course $course, array $data)
    {
        $course->curriculum()->delete();

        $curriculum = $data['curriculum'];

        Curriculum::updateOrCreate(
            ['course_id' => $course->id],
            ['contents' => json_encode($curriculum)]
        );

        return $course;
    }

    public function divideStudentToGroups(Course $course, array $data = null)
    {
        $this->removeGroups($course);
        $groups = [];
        $students = $course->students()->wherePivot('status', '=', CourseStudent::STATUS_ACCEPTED)->get();
        if (array_key_exists('number_of_groups', $data) &&  $data['number_of_groups']) {
            $groups = Math::dividePeopleToNoGroups($students->count(), $data['number_of_groups']);
        } else {
            $groups = Math::dividePeopleToGroupsWithSize($students->count(), $data['group_size']);
        }

        // Create a function to distribute randomly students to groups
        $students = $students->shuffle();

        foreach ($groups as $number => $groupSize) {
            $group = Group::create([
                'name' => 'Group ' . ($number+1),
                'number' => ($number+1),
                'course_id' => $course->id
            ]);

            foreach ($students->take($groupSize) as $student) {
                $group->students()->attach($student);
            }
            $students = $students->slice($groupSize);
        }

        return $this->memberList($course);
    }

    // Create a function to remove all groups of a course
    public function removeGroups(Course $course)
    {
        $groups = $course->groups;
        foreach ($groups as $group) {
            $group->students()->detach();
            $group->delete();
        }
    }
}
