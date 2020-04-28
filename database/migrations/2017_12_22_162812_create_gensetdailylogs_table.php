<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGensetdailylogsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('genset_daily_logs', function(Blueprint $table) {
            $table->increments('id');
            $table->string('genset_it');
            $table->string('date');
            $table->string('start_time');
            $table->string('stop_time');
            $table->string('hsd_consumption');
            $table->string('start_unit');
            $table->string('stop_unit');
            $table->string('manufacturing');
            $table->string('other');
            $table->string('irrigation');
            $table->string('user_id')->unsigned();
            $table->string('estate_id')->unsigned();
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
		Schema::drop('gensetdailylogs');
	}

}
