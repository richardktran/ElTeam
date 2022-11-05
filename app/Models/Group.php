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
    ];

    protected $with = [
        'students',
        'course'
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function students()
    {
        return $this->belongsToMany(User::class, 'group_student', 'group_id', 'student_id');
    }

    public function isLeader()
    {
        return $this->belongsToMany(User::class, 'group_student', 'group_id', 'student_id')->where('is_leader', true);
    }
}
