<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function getTasksForGroup(Request $request, Group $group)
    {
        $sections = $group->course->sections->load(['tasks' => function ($query) use ($group) {
            $query->where('group_id', $group->id)
                ->orderBy('position', 'asc');
        }]);

        return $this->response($sections);
    }
}
