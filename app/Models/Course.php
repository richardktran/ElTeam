<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

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
    ];

    public function teacher()
    {
        return $this->belongsTo(User::class);
    }
}
