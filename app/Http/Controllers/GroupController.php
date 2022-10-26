<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    public function getMyGroup(Request $request, Course $course)
    {
        $user = $request->user();
        $group = $user->groups()->where('course_id', $course->id)->first();
        return $this->response($group);
    }
}
