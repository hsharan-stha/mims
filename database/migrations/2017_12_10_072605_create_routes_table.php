<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoutesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('routes', function (Blueprint $table) {
            $table->increments('id')->index();
            $table->string('name');
            $table->string('method');
            $table->string('path');
            $table->string('action_name');
            $table->integer(    'permission_id')->unsigned();
            $table->timestamps();
            $table->foreign('permission_id')->references('id')->on('permissions')->ondelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('routes');
    }
}
