<?php

namespace App\Console\Commands;

use App\Models\Course;
use App\Models\CourseStudent;
use Illuminate\Console\Command;

class AcceptStudents extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:accept_students {courseId}';

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
        $courseId = $this->argument('courseId');
        $course = Course::find($courseId);
        CourseStudent::where('course_id', $courseId)->where('status', CourseStudent::STATUS_PENDING)
        ->update(['status' => CourseStudent::STATUS_ACCEPTED]);

        $this->info('All students accepted');
    }
}
