<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDryerdailylogsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('fac_daily_dryer_logs', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('tea_made_process_id')->unsigned();
            $table->string('leaf_type');
            $table->date('leaf_date');
            $table->string('green_leaf');
            $table->string('fuel_type');
            $table->string('fuel_quantity');
            $table->string('dryer_date');
            $table->string('time_in');
            $table->string('time_out');
            $table->string('withered_leaf');
            $table->string('made_tea');
            $table->string('recovery_percentage');
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
		Schema::drop('fac_dryer_daily_logs');
	}

}
