<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->string('comment')->nullable();
            $table->enum('category', ['Candidate', 'Recruiter', 'Admin'])->nullable();
            $table->foreignId('assignBy')->nullable()->constrained('admin_users');
            $table->foreignId('userID')->nullable()->constrained('admin_users');
            $table->dateTime('completedAt')->nullable();
            $table->dateTime('plannedStartDate')->nullable();
            $table->dateTime('plannedEndDate')->nullable();
            $table->softDeletes();
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
        Schema::dropIfExists('admin_tasks');
    }
}
