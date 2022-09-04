<?php

namespace App\Services;

use App\Models\Course;

class CourseService
{
    public function getAllCourses($teacherId, array $conditions=[])
    {
        $courses = Course::where('teacher_id', $teacherId)->orderBy('created_at','desc')->get();

        return $courses;
    }

    public function createCourse(array $data)
    {
        $course = Course::create($data);

        return $course;
    }
}
