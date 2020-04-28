<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExcessteamadesTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('fac_excess_teamades', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('dryer_id')->unsigned();
            $table->date('date');
            $table->string('excess_tea_made');
            $table->foreign('dryer_id')->references('id')->on('fac_master_dryers')->onDelete('cascade');
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
		Schema::drop('fac_excess_teamades');
	}

}
