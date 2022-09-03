<?php

namespace App\Services;

use App\Models\Course;

class CourseService
{
    public function getAllCourses($teacherId, array $conditions=[])
    {
        $courses = Course::all()->where('teacher_id', $teacherId);

        return $courses;
    }

    public function createCourse(array $data)
    {
        $course = Course::create($data);

        return $course;
    }
}
