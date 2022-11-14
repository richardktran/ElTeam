<?php

namespace App\Http\Controllers;

use App\Events\GenerateGroupsEvent;
use App\Http\Requests\Courses\InviteStudentsValidator;
use App\Http\Requests\CreateCourseRequest;
use App\Http\Resources\CourseResource;
use App\Models\Course;
use App\Services\CourseService;
use Illuminate\Http\Request;
use App\Http\Requests\CreateCourseValidator;
use App\Http\Resources\UserResource;
use App\Imports\UsersImport;
use App\Models\CourseStudent;
use App\Models\Curriculum;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;

class CourseController extends Controller
{
    protected CourseService $courseService;

    public function __construct(CourseService $courseService)
    {
        $this->courseService = $courseService;
    }

    /**
     * Get the courses that is made by current user
     * @param Request $request
     * @return mixed
     */
    public function getOwnCourses(Request $request)
    {
        $params = $request->all();
        $teacherId = Auth::user()->id;
        $courses = $this->courseService->getAllOwnCourses($teacherId, $params);

        return $this->pagination($courses, CourseResource::class);
    }

    /**
     * Get the courses that the user is learning
     * @param Request $request
     * @return mixed
     */
    public function getLearningCourses(Request $request)
    {
        $params = $request->all();
        $userId = Auth::user()->id;
        $courses = $this->courseService->getAllLearningCourses($userId, $params);

        return $this->pagination($courses, CourseResource::class);
    }

    public function membersList(Request $request, $courseId)
    {
        $course = Course::findOrFail($courseId);

        $members = $this->courseService->memberList($course);
        

        return $this->response($members);
    }

    public function detail(Request $request, $courseId)
    {
        $course = Course::findOrFail($courseId);

        return $this->response(new CourseResource($course));
    }

    public function getcurriculum(Request $request, Course $course)
    {
        $curriculum = Curriculum::where('course_id', $course->id)->first();
        $contents = json_decode(optional($curriculum)->contents, 1);

        return $this->response($contents);
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

    public function accept(Course $course)
    {
        $currentUser = Auth::user();
        $this->courseService->acceptCourse($course, $currentUser);

        return $this->response('Accepted');
    }

    public function decline(Course $course)
    {
        $currentUser = Auth::user();
        $this->courseService->declineCourse($course, $currentUser);

        return $this->response('Declined');
    }


    public function update(Request $request, Course $course)
    {
        //
    }

    /**
     * Invite member to a course
     * @param Request $request
     * @param Course $course
     * @return \Illuminate\Http\JsonResponse
     */
    public function invite(Request $request, Course $course, InviteStudentsValidator $validator)
    {
        $request = $request->all();
        $validator->validate($request);

        $course = $this->courseService->inviteStudents($course, $request);

        return $this->response([
            'message' => 'Lời mời tham gia lớp học đã được gửi',
            'data' => [
                'course' => new CourseResource($course),
                'students' =>  $request['students']
            ]
        ]);
    }

    public function createOrUpdateCurriculum(Request $request, Course $course)
    {
        $request = $request->all();
        $curriculum = $this->courseService->createOrUpdateCurriculum($course, $request);

        return $this->response($curriculum);
    }

    public function divideStudentToGroups(Request $request, Course $course)
    {
        $request = $request->all();
        $groups = $this->courseService->divideStudentToGroups($course, $request);

        event(new GenerateGroupsEvent($course));
        return $this->response($groups);
    }

    public function importStudents(Request $request, Course $course)
    {
        $import = new UsersImport;
        Excel::import($import, $request->file('file'));
        $data = $import->getEmails();
        
        return $this->response($data);
    }

    public function destroy(Course $course)
    {
        //
    }
}
