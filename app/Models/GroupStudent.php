<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class GroupStudent extends Pivot
{
    protected $table = 'group_student';
    protected $fillable = [
        'id',
        'is_leader',
        'student_id',
        'group_id',
    ];

    public function student()
    {
        return $this->belongsTo(User::class, 'student_id');
    }

    public function group()
    {
        return $this->belongsTo(Group::class, 'group_id');
    }
}
