<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCtcmachinedailylogsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ctc_machine_daily_logs', function(Blueprint $table) {
            $table->increments('id');
            $table->string('ctc_machine_id');
            $table->string('date');
            $table->string('start_time');
            $table->string('stop_time');
            $table->string('output_per_hour');
            $table->string('run_hour_after_roller_change');
            $table->string('user_id');
            $table->string('estate_id');
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
		Schema::drop('ctcmachinedailylogs');
	}

}
