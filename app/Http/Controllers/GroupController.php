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
}
