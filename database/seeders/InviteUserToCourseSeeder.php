<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\CourseStudent;
use App\Models\User;
use Illuminate\Database\Seeder;

class InviteUserToCourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $course = Course::find(1);
        $students = User::whereNotIn('id', [$course->teacher_id])->get();
        foreach ($students as $student) {
            $course->students()->attach($student->id, [
                'status' => $this->getRandomStatus()
            ]);
        }
    }

    private function getRandomStatus()
    {
        $statuses = [
            CourseStudent::STATUS_PENDING,
            CourseStudent::STATUS_ACCEPTED,
            CourseStudent::STATUS_DECLINED
        ];

        return $statuses[array_rand($statuses)];
    }
}
