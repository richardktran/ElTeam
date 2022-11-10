<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class GenerateImageSizesEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    private $path;
    private $isPublic;
    private $sizes;

    public function __construct($path, $isPublic = true, $sizes = [])
    {
        $this->path = $path;
        $this->isPublic = $isPublic;
        $this->sizes = $sizes;
    }

    public function getPath()
    {
        return $this->path;
    }

    public function getIsPublic()
    {
        return $this->isPublic;
    }

    public function getSizes()
    {
        return $this->sizes;
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
