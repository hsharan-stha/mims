<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSectionalweatherhistoriesTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('field_sectional_weather_histories', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->string(    'rainfall');
            $table->integer(   'section_id')->unsigned();
            $table->integer(   'division_id')->unsigned();
            $table->integer(   'user_id')->unsigned();
            $table->timestamps();
            $table->foreign(    'section_id')->references('id')->on('master_sections')->onDelete('cascade');
            $table->foreign(    'division_id')->references('id')->on('master_divisions')->onDelete('cascade');
            $table->foreign(    'user_id')->references('id')->on('users')->onDelete('cascade');

        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('field_sectional_weather_histories');
	}

}
