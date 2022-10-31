<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->integer('position');
            $table->string('title');
            $table->text('content')->nullable();
            $table->json('assignees')->nullable();
            $table->dateTime('deadline')->nullable();
            $table->unsignedBigInteger('section_id')->constrained();
            $table->unsignedBigInteger('group_id')->constrained();

            $table->foreign('section_id')->references('id')->on('sections');
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
        Schema::dropIfExists('tasks');
    }
}
