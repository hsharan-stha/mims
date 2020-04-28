<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDryersTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('fac_master_dryers', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->string('dryer_no');
            $table->string('manufacturer');
            $table->string('installation_date');
            $table->string('last_overhauling_date');
            $table->string('throughput_rate');
            $table->timestamps();
            $table->integer('estate_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->foreign('estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('fac_master_dryers');
	}

}
