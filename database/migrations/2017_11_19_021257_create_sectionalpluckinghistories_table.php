<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSectionalpluckinghistoriesTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('field_sectional_plucking_histories', function(Blueprint $table) {
            $table->increments( 'id')->index();
            $table->integer(    'section_id')->unsigned();
            $table->string(     'area_plucked');
            $table->string(     'leaf_plucked');
            $table->string(     'tea_made');
            $table->date(       'date');
            $table->string(     'year');
            $table->string(     'mandays_used');
            $table->integer(    'user_id')->unsigned();
            $table->integer(    'estate_id')->unsigned();
            $table->integer(    'prune_style_id')->unsigned();
            $table->timestamps();
            $table->foreign(    'section_id')->references('id')->on('master_sections')->onDelete('cascade');
            $table->foreign(    'user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign(    'estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');
            $table->foreign(    'prune_style_id')->references('id')->on('field_prune_styles')->onDelete('cascade');

        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('field_sectional_plucking_histories');
	}

}
