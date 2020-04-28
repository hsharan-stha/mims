<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSectionfieldactivitypruningdetailsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('field_sec_field_act_pru_det', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('section_field_activity_id')->unsigned();
            $table->integer('shade_status');
            $table->integer('shade_tree_type_id')->unsigned();
            $table->string('no_of_tress');
            $table->timestamps();
            $table->foreign('section_field_activity_id')->references('id')->on('field_section_field_activities')->onDelete('cascade');
            $table->foreign('shade_tree_type_id')->references('id')->on('field_shade_tree_types')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('field_sec_field_act_pru_det');
	}

}
