<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Group;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    public function getMyGroup(Request $request, Course $course)
    {
        $user = $request->user();
        $group = $user->groups()->where('course_id', $course->id)->first();
        return $this->response($group);
    }

    public function getGroupInfo(Request $request, Group $group)
    {
        return $this->response($group);
    }

    public function getAll(Request $request)
    {
        $request = $request->all();
        $courseId = $request['course_id'];

        $groups = Group::all()->where('course_id', $courseId);
        // get getNumberOfCompletedTasks and getNumberOfTasks for each group
        $groups = $groups->map(function ($group) {
            $group->number_of_completed_tasks = $group->getNumberOfCompletedTasks();
            $group->number_of_tasks = $group->getNumberOfTasks();
            return $group;
        });
        
        return $this->response($groups);
    }
}
