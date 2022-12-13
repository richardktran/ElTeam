<?php

namespace App\Console\Commands;

use App\Models\Group;
use App\Models\Section;
use App\Models\Task;
use Illuminate\Console\Command;

class CreateTasks extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create_tasks {groupId}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $groupId = $this->argument('groupId');
        $courseId = Group::find($groupId)->course_id;
        // Clone all tasks from groups with id = 107 to group with id = $groupId
        $tasks = Task::where('group_id', 107)->get();
        foreach ($tasks as $task) {
            $newTask = $task->replicate();
            $newTask->section_id = Section::where('course_id',$courseId)->
                where('title', $task->section->title)->first()->id;
            $newTask->group_id = $groupId;
            $newTask->assignees = [];
            $newTask->save();
        }

        $this->info('All tasks created');
        return 0;
    }
}
