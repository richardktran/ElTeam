<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'position',
        'deadline',
        'assignees',
        'section_id',
        'group_id',
    ];

    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    public function group()
    {
        return $this->belongsTo(Group::class);
    }

    public function getAssigneesAttribute($value)
    {
        $assignees = json_decode($value);
        if (!$assignees) {
            return [];
        }
        $listAssignees = User::whereIn('id', $assignees)->get();
        return $listAssignees;
    }

    public function setAssigneesAttribute($value)
    {
        $this->attributes['assignees'] = json_encode($value);
    }
}
