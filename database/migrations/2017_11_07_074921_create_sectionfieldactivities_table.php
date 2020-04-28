<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSectionfieldactivitiesTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('field_section_field_activities', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('division_id')->unsigned();
            $table->string('plantation_start_year');
            $table->string('year');
            $table->integer('prune_style_id')->unsigned();
            $table->string('area_plucked');
            $table->string('leaf_plucked');
            $table->string('tea_made');
            $table->string('man_days_used');
            $table->foreign('division_id')->references('id')->on('master_divisions')->onDelete('cascade');
            $table->foreign('prune_style_id')->references('id')->on('field_prune_styles')->onDelete('cascade');
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
		Schema::drop('field_section_field_activities');
	}

}
