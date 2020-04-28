<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFuelconsumptiondailylogsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('fuel_consumption_daily_logs', function(Blueprint $table) {
            $table->increments('id');
            $table->string('fuel_type_id');
            $table->timestamp('date');
            $table->float('consumption');
            $table->boolean('manufacturing');
            $table->boolean('other');
            $table->boolean('irrigation');
            $table->integer('user_id')->unsigned();
            $table->integer('estate_id')->unsigned();
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
		Schema::drop('fuelconsumptiondailylogs');
	}

}
