<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSectionwiseTeaMadesTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('field_sectionwise_tea_mades', function(Blueprint $table) {
            $table->increments( 'id')->index();
            $table->integer(    'section_id')->unsigned();
            $table->date(       'date');
            $table->string(     'green_leaf');
            $table->string(     'tea_made');
            $table->integer(    'recovery_percentage');
            $table->integer(    'user_id')->unsigned();
            $table->integer(    'estate_id')->unsigned();
            $table->timestamps();
            $table->foreign(    'user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign(    'section_id')->references('id')->on('master_sections')->onDelete('cascade');
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
		Schema::drop('field_sectionwise_tea_mades');
	}

}
