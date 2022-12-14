<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'id',
        'code',
        'name',
        'location',
        'credit',
        'hours_per_week',
        'start_date',
        'end_date',
        'teacher_id',
        'lock_group'
    ];

    public function teacher()
    {
        return $this->belongsTo(User::class);
    }

    public function students()
    {
        return $this->belongsToMany(User::class, 'course_student', 'course_id', 'user_id')->withPivot('status');
    }

    public function curriculum()
    {
        return $this->belongsTo(Curriculum::class);
    }

    public function groups()
    {
        return $this->hasMany(Group::class);
    }

    public function sections()
    {
        return $this->hasMany(Section::class);
    }
}
