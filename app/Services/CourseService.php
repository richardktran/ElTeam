<?php

namespace App\Services;

use App\Models\Course;

class CourseService
{
    public function getAllCourses(array $conditions=[])
    {
        $courses = Course::all();

        return $courses;
    }

    public function createCourse(array $data)
    {
        $course = Course::create($data);

        return $course;
    }
}
