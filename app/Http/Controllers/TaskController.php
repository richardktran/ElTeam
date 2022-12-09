<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Task;
use App\Services\TaskService;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    protected TaskService $taskService;

    public function __construct(TaskService $taskService)
    {
        $this->taskService = $taskService;
    }

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

        $task = $this->taskService->createTask($params, $group);

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
