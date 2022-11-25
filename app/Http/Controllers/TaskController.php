<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function getTask(Request $request, Task $task)
    {
        return $this->response($task);
    }
    public function getTasksForGroup(Request $request, Group $group)
    {
        $sections = $group->course->sections->load(['tasks' => function ($query) use ($group) {
            $query->where('group_id', $group->id)
                ->orderBy('position', 'asc');
        }]);

        return $this->response($sections);
    }

    public function getGroupOfTask(Request $request, Task $task)
    {
        return $this->response($task->group);
    }

    public function updatePositionTask(Request $request, Group $group)
    {
        $params = $request->all();
        $sections = $params['sections'];

        foreach ($sections as $section) {
            $tasks = $section['tasks'];
            foreach ($tasks as $task) {
                $taskModel = Task::find($task['id']);
                $taskModel->position = $task['position'];
                $taskModel->section_id = $section['id'];
                $taskModel->save();
            }
        }

        $this->response(['message' => 'Update position successfully']);
    }

    public function createTask(Request $request, Group $group)
    {
        $params = $request->all();

        $latestPosition = Task::where('group_id', $group->id)
            ->where('section_id', $params['section_id'])
            ->orderBy('position', 'desc')
            ->first();

        $position = $latestPosition ? $latestPosition->position + 1 : 0;
        $task = Task::create([
            'title' => $params['title'],
            'content' => $params['content'],
            'group_id' => $group->id,
            'section_id' => $params['section_id'],
            'deadline' => $params['deadline'],
            'position' => $position,
        ]);

        return $this->response($task);
    }

    public function updateTask(Request $request, Task $task)
    {
        $params = $request->all();

        if (isset($params['assignees'])) {
            $assignees = $params['assignees'];
            // Get ids of assignees
            $assigneesIds = array_map(function ($assignee) {
                return (string)$assignee['id'];
            }, $assignees);
            $params['assignees'] = $assigneesIds;
        }

        Task::where('id', $task->id)
            ->update($params);
        $task = Task::find($task->id);

        return $this->response($task);
    }

    public function deleteTask(Request $request, Task $task)
    {
        $task->delete();

        return $this->response(['message' => 'Delete task successfully']);
    }
}
