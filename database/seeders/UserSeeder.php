<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [

                'name' => 'Nguyen Van Admin',
                'email' => 'admin@gg.com',
                'password' => Hash::make('123456'),
                'role_id' => Role::ADMIN,
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Tran Van Teacher',
                'email' => 'teacher@gg.com',
                'password' => Hash::make('123456'),
                'status' => 1,
                'role_id' => Role::TEACHER,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Nguyen Thi Student',
                'email' => 'student@gg.com',
                'password' => Hash::make('123456'),
                'status' => 1,
                'role_id' => Role::STUDENT,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
