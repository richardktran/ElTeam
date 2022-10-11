<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Curriculum extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'contents',
        'course_id',
    ];

    protected $table = 'curriculums';

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
