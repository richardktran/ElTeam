<?php

namespace App\Services;

use App\Models\Group;
use App\Models\Task;

class TaskService
{
    public function createTask($params, Group $group)
    {
        $latestPosition = Task::where('group_id', $group->id)
            ->where('section_id', $params['section_id'])
            ->orderBy('position', 'desc')
            ->first();

        $position = $latestPosition ? $latestPosition->position + 1 : 0;
        $data = [
            'title' => $params['title'],
            'content' => $params['content'],
            'group_id' => $group->id,
            'section_id' => $params['section_id'],
            'deadline' => $params['deadline'],
            'position' => $position,
        ];

        if (isset($params['activity_id'])) {
            $data['activity_id'] = $params['activity_id'];
        }

        $task = Task::create($data);

        return $task;
    }
}
