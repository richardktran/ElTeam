<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Task;
use App\Services\TaskService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

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

    public function archiveSubmitFiles(Request $request, Task $task)
    {
        $params = $request->all();
        $groupName = $params['group_name'];
        $activityId = $params['activity_id'];

        $folderPath = 'tasks/' . $task->id;
        $fileUrls = $params['file_urls'];
        foreach ($fileUrls as $fileUrl) {
            $file = file_get_contents($fileUrl['url']);
            $fileName = $fileUrl['name'];
            
            $filePath = $folderPath.'/' . $fileName;

            if (!Storage::disk('local')->exists($folderPath)) {
                Storage::disk('local')->makeDirectory($folderPath);
            }
            Storage::disk('local')->put($filePath, $file);
        }

        $zip_file=storage_path('app/'.$folderPath."/$groupName-$activityId.zip");
        $zip = new \ZipArchive();
        $zip->open($zip_file, \ZipArchive::CREATE | \ZipArchive::OVERWRITE);
        $path = storage_path('app/'.$folderPath); // path to your pdf files
        $files = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($path));
        foreach ($files as $name => $file)
        {
            // We're skipping all subfolders
            if (!$file->isDir()) {
                $filePath     = $file->getRealPath();
                // extracting filename with substr/strlen
                $relativePath = substr($filePath, strlen($path) + 1);
                $zip->addFile($filePath, $relativePath);
            }
        }
        $zip->close();
        $headers = array('Content-Type'=>'application/octet-stream',);
        $zip_new_name = "$groupName-$activityId.zip";

        // Upload zip file to S3 with folder name is tasks/{task_id}/hand-in/{group_name}-{activity_id}.zip
        $s3 = Storage::disk('s3');
        $s3->put($folderPath.'/hand-in/'.$zip_new_name, file_get_contents($zip_file), 'private');
        // Get url
        $fileUrl = $s3->url($folderPath.'/hand-in/'.$zip_new_name);

        // Delete all files in folder tasks/{task_id}
        File::deleteDirectory(storage_path('app/'.$folderPath));

        return $this->response(['file_url' => $fileUrl, 'file_name' => $zip_new_name]);
    }

    public function deleteTask(Request $request, Task $task)
    {
        $task->delete();

        return $this->response(['message' => 'Delete task successfully']);
    }
}
