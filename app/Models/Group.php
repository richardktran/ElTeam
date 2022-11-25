<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use function PHPSTORM_META\map;

class Group extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'number',
        'course_id'
    ];

    protected $with = [
        'students',
        'course',
        'tasks',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function students()
    {
        return $this->belongsToMany(User::class, 'group_student', 'group_id', 'student_id');
    }

    public function isLeader()
    {
        return $this->belongsToMany(User::class, 'group_student', 'group_id', 'student_id')->where('is_leader', true);
    }

    // Get number of tasks in group
    public function getNumberOfTasks()
    {
        return $this->tasks()->count();
    }

    // Get number of tasks with section title is  ✔️ Completed
    public function getNumberOfCompletedTasks()
    {
        // Get the last section title of course
        $course = $this->course;
        $lastSection = $course->sections()->orderBy('id', 'desc')->first();

        return $this->tasks()->whereHas('section', function ($query) use ($lastSection) {
            $query->where('title', $lastSection->title);
        })->count();
    }
}
