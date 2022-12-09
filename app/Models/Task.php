<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    const STATUS_TODO = 'todo';
    const STATUS_INPROGRESS = 'in-progress';
    const STATUS_DONE = 'done';

    protected $fillable = [
        'title',
        'content',
        'position',
        'deadline',
        'assignees',
        'section_id',
        'group_id',
        'activity_id',
        'group_name',
    ];

    protected $appends = ['group_info', 'group_students', 'status'];

    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    public function group()
    {
        return $this->belongsTo(Group::class);
    }

    public function activity()
    {
        return $this->belongsTo(Activity::class);
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

    public function getGroupInfoAttribute()
    {
        $group = Group::find($this->group_id)->name;
        return $group;
    }

    public function getGroupStudentsAttribute()
    {
        $group = Group::find($this->group_id)->students;
        return $group;
    }

    public function getStatusAttribute()
    {
        $status = Section::find($this->section_id)->title;
        switch ($status) {
            case ' 📃 Cần làm':
                return self::STATUS_TODO;
            case ' ✏️ Đang làm':
                return self::STATUS_INPROGRESS;
            case ' ✔️ Hoàn thành':
                return self::STATUS_DONE;
            default:
                return self::STATUS_TODO;
        }
    }
}
