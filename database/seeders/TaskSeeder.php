<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->insert([
            [
                'position' => 0,
                'title' => 'Learn JavaScript',
                'content' => 'Update the new UI design for @dashlite template with based on feedback.',
                'assignees' => json_encode(['1', '4']),
                'section_id' => 1,
                'group_id' => 107,
            ],
            [
                'position' => 1,
                'title' => 'Learn Git',
                'content' => 'Update the new UI design for @dashlite template with based on feedback.',
                'assignees' => json_encode(['1', '4']),
                'section_id' => 1,
                'group_id' => 107,
            ],
            [
                'position' => 2,
                'title' => 'Learn Python',
                'content' => 'Update the new UI design for @dashlite template with based on feedback.',
                'assignees' => json_encode(['1', '4']),
                'section_id' => 1,
                'group_id' => 107,
            ],
            [
                'position' => 0,
                'title' => 'Learn Golang',
                'content' => 'Update the new UI design for @dashlite template with based on feedback.',
                'assignees' => json_encode(['1', '4']),
                'section_id' => 2,
                'group_id' => 107,
            ],
            [
                'position' => 1,
                'title' => 'Learn CSS',
                'content' => 'Update the new UI design for @dashlite template with based on feedback.',
                'assignees' => json_encode(['1', '4']),
                'section_id' => 2,
                'group_id' => 107,
            ],
            [
                'position' => 0,
                'title' => 'Learn HTML',
                'content' => 'Update the new UI design for @dashlite template with based on feedback.',
                'assignees' => json_encode(['1', '4']),
                'section_id' => 3,
                'group_id' => 107,
            ],
            [
                'position' => 1,
                'title' => 'Learn NodeJS',
                'content' => 'Update the new UI design for @dashlite template with based on feedback.',
                'assignees' => json_encode(['1', '4']),
                'section_id' => 3,
                'group_id' => 107,
            ],
        ]);
    }
}
