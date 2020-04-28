<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSupppliersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fac_master_suppliers', function (Blueprint $table) {
            $table->increments('id')->index();
            $table->string('name',30);
            $table->string('address',255);
            $table->string('contact_no');
            $table->string('type');
            $table->integer('estate_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->foreign('estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
        Schema::drop('fac_master_suppliers');
    }
}
