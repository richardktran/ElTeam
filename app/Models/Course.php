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
    ];

    public function teacher()
    {
        return $this->belongsTo(User::class);
    }
}
