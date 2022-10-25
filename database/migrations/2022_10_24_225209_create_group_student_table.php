<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGroupStudentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('group_student', function (Blueprint $table) {
            $table->id();
            $table->boolean('is_leader')->default(false);
            $table->unsignedBigInteger('student_id')->constrained();
            $table->unsignedBigInteger('group_id')->constrained();

            $table->foreign('student_id')->references('id')->on('users');
            $table->foreign('group_id')->references('id')->on('groups');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('group_student');
    }
}
