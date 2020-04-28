<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSectionalshadetreedetailsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('field_sectional_shadetree', function(Blueprint $table) {
            $table->increments( 'id')->index();
            $table->integer(    'shade_status');
            $table->integer(    'shade_tree_type_id')->unsigned();
            $table->string(     'no_of_trees');
            $table->integer(    'section_id')->unsigned();
            $table->integer(    'user_id')->unsigned();
            $table->integer(    'estate_id')->unsigned();
            $table->timestamps();
            $table->foreign(    'section_id')->references('id')->on('master_sections')->onDelete('cascade');
            $table->foreign(    'shade_tree_type_id')->references('id')->on('field_shade_tree_types')->onDelete('cascade');
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
		Schema::drop('field_sectional_shadetree');
	}

}
