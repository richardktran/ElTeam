<?php

namespace App\Listeners;

use App\Events\CourseInvitationEvent;
use App\Mail\CourseInvitationMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class EmailCourseInvitationListener implements ShouldQueue
{
    use Queueable, InteractsWithQueue, SerializesModels;
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\CourseInvitationEvent  $event
     * @return void
     */
    public function handle(CourseInvitationEvent $event)
    {
        $course = $event->getCourse();
        $students = $event->getStudents();

        $emailData = [
            "course_name" => "$course->code $course->name",
            "owner_name" => $course->teacher->name,
            "owner_email" => $course->teacher->email,
            "course_url" => config('app.url') . "/courses/$course->id",
        ];

        Mail::to($students)->send(new CourseInvitationMail($emailData));

    }
}
