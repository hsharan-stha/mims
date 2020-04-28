<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSectionalinfillinghistoriesTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('field_sectional_infilling', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('section_id')->unsigned();
            $table->integer('bush_variety_id')->unsigned();
            $table->string('area_covered');
            $table->string('plant_infilled');
            $table->integer(    'user_id')->unsigned();
            $table->integer(    'estate_id')->unsigned();
            $table->timestamps();
            $table->foreign('section_id')->references('id')->on('master_sections')->onDelete('cascade');
            $table->foreign('bush_variety_id')->references('id')->on('field_bush_varieties')->onDelete('cascade');
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
		Schema::drop('field_sectional_infilling');
	}

}
