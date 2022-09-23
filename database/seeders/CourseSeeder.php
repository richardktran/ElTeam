<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('courses')->insert([
            [
                'name' => 'Luận văn tốt nghiệp',
                'code' => 'CT240',
                'location' => '301/C1',
                'credit' => 4,
                'hours_per_week' => 8,
                'start_date' => '2022-09-01',
                'end_date' => '2022-12-01',
                'teacher_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Nhập môn lập trình',
                'code' => 'CT484',
                'location' => '101/B1',
                'credit' => 3,
                'hours_per_week' => 5,
                'start_date' => '2022-09-01',
                'end_date' => '2022-12-01',
                'teacher_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Mạng máy tính',
                'code' => 'CT847',
                'location' => '108/DI',
                'credit' => 4,
                'hours_per_week' => 8,
                'start_date' => '2022-09-01',
                'end_date' => '2022-12-01',
                'teacher_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
