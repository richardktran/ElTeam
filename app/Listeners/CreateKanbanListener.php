<?php

namespace App\Listeners;

use App\Events\GenerateGroupsEvent;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CreateKanbanListener implements ShouldQueue
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
     * @param  \App\Events\GenerateGroupsEvent  $event
     * @return void
     */
    public function handle(GenerateGroupsEvent $event)
    {
        $course = $event->getCourse();
        $course->sections()->createMany([
            [
                'title' => ' 📃 To do',
            ],
            [
                'title' => ' ✏️ In progress',
            ],
            [
                'title' => ' ✔️ Completed',
            ],
        ]);
    }
}
