<?php

namespace App\Events;

use App\Models\Course;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class CourseInvitationEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    private Course $course;
    private array $students;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Course $course, array $students)
    {
        $this->course = $course;
        $this->students = $students;
    }

    public function getCourse(): Course
    {
        return $this->course;
    }

    public function getStudents(): array
    {
        return $this->students;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
