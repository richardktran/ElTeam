<?php

namespace App\Services;

use App\Events\CourseInvitationEvent;
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
        CourseInvitationEvent::dispatch($course, $students);
        return $course;
    }
}
