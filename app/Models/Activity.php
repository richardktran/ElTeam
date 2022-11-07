<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

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
}
