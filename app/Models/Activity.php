<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    const TYPE_VIDEO = 'video';
    const TYPE_AUDIO = 'audio';
    const TYPE_PDF = 'pdf';
    const TYPE_TASK = 'task';
    const TYPE_QUIZ = 'quiz';
    const TYPE_TEXT = 'text';
    const TYPE_LINK = 'link';


    protected $fillable = [
        'name',
        'type',
        'position',
        'enable',
        'start_date',
        'end_date',
        'url',
        'content',
        'topic_id',
    ];

    public function topic()
    {
        return $this->belongsTo(Topic::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
