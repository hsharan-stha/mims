<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->increments('id')->index();
            $table->string('name');
            $table->string('display_name');
            $table->string('description');
            // $table->integer(    'permission_ids')->unsigned();
            $table->timestamps();
            // $table->foreign('permission_ids')->references('id')->on('permissions')->ondelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('roles');
    }
}
