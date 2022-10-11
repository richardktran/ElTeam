<?php

namespace App\Services;

use App\Events\CourseInvitationEvent;
use App\Mail\CourseInvitationMail;
use App\Models\Course;
use App\Models\CourseStudent;
use App\Models\Curriculum;
use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Mail;

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
}
