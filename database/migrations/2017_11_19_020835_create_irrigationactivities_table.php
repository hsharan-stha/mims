<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIrrigationactivitiesTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('field_irrigation_activities', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer(    'irrigation_unit_id')->unsigned();
            $table->date(   'date');
            $table->integer(    'section_id')->unsigned();
            $table->string(    'no_of_setting');
            $table->string(    'running_hrs_of_setting');
            $table->string(    'no_of_sprinkler');
            $table->string( 'rain_received');
            $table->string( 'area_per_setting');
            $table->string( 'area_covered_today');
            $table->string( 'area_covered_todate');
            $table->string( 'round');
            $table->string( 'mandays_today');
            $table->string( 'mandays_todate');
            $table->integer(    'user_id')->unsigned();
            $table->integer(    'estate_id')->unsigned();
            $table->timestamps();
            $table->foreign(    'irrigation_unit_id')->references('id')->on('field_irrigation_units')->onDelete('cascade');
            $table->foreign(    'section_id')->references('id')->on('master_sections')->onDelete('cascade');
            $table->foreign(    'user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign(    'estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('field_irrigation_activities');
	}

}
