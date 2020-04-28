<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('master_sections', function (Blueprint $table) {
            $table->increments('id')->index();
            $table->string('code')->unique();
            $table->string('area');
            $table->string('name',60);
            $table->string('plantation_start_year');
            $table->integer('division_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->integer('estate_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('division_id')->references('id')->on('master_divisions')->onDelete('cascade');
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
        Schema::drop('master_sections');
    }
}
