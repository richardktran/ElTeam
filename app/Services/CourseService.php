<?php

namespace App\Services;

use App\Mail\CourseInvitationMail;
use App\Models\Course;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Mail;

class CourseService
{
    /**
     * @param mixed $teacherId
     * @param array $params
     * @return LengthAwarePaginator
     */
    public function getAllCourses($teacherId, array $params = []): LengthAwarePaginator
    {
        $pageSize = $params['pageSize'] ?? config('services.pagination.items_per_page');
        $courses = Course::where('teacher_id', $teacherId)
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

        $emailData = [
            "course_name" => "$course->code $course->name",
            "owner_name" => $course->teacher->name,
            "owner_email" => $course->teacher->email,
            "course_url" => config('app.url') . "/courses/$course->id",
        ];

        Mail::to($students)->send(new CourseInvitationMail($emailData));


        return $course;
    }
}
