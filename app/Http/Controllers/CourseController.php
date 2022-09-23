<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCourseRequest;
use App\Http\Resources\CourseResource;
use App\Models\Course;
use App\Services\CourseService;
use Illuminate\Http\Request;
use App\Http\Requests\CreateCourseValidator;
use Illuminate\Support\Facades\Auth;

class CourseController extends Controller
{
    protected CourseService $courseService;

    public function __construct(CourseService $courseService)
    {
        $this->courseService = $courseService;
    }

    public function index(Request $request)
    {
        $params = $request->all();
        $teacherId = Auth::user()->id;
        $courses = $this->courseService->getAllCourses($teacherId,$params);

        return $this->pagination($courses, CourseResource::class);
    }

    public function create(Request $request, CreateCourseValidator $validator)
    {
        $request = $request->all();
        $validator->validate($request);
        $teacherId = Auth::user()->id;
        $course = $this->courseService->createCourse(
            array_merge($request, ['teacher_id' => $teacherId])
        );

        return $this->response(new CourseResource($course));
    }

    public function show(Course $course)
    {
        //
    }

    public function edit(Course $course)
    {
        //
    }


    public function update(Request $request, Course $course)
    {
        //
    }

    public function destroy(Course $course)
    {
        //
    }
}
