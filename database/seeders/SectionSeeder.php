<?php

namespace Database\Seeders;

use App\Models\Section;
use DB;
use Illuminate\Database\Seeder;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sections')->insert([
            [
                'title' => ' 📃 To do',
                'course_id' => 1,
            ],
            [
                'title' => ' ✏️ In progress',
                'course_id' => 1,
            ],
            [
                'title' => ' ✔️ Completed',
                'course_id' => 1,
            ],
        ]);
    }
}
