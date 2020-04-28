<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSectionhistoriesTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('field_section_histories', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->date('date');
            $table->string('year');
            $table->string('section_name');
            $table->integer('section_id')->unsigned();
            $table->integer('bush_type_id')->unsigned();
            $table->string('bush_per_hector');
            $table->integer('bush_name_id')->unsigned();
            $table->integer('area');
            $table->integer('area_under_tea');
            $table->integer('replanted_area');
            $table->integer('elevation');
            $table->integer('ph_value');
            $table->integer('round');
            $table->integer('bush_no');
            $table->integer('bush_density');
            $table->integer('no_of_irrigated_time');
            $table->integer('last_irrigated');
            $table->string('drainage_type');
            $table->integer('drain_depth');
            $table->string('drain_status');
            $table->integer('Nitrogen');
            $table->integer('Potassium');
            $table->integer('split_npk');
            $table->integer('phosphate');
            $table->integer('spacing_of_bushes');
            $table->integer('split2_npk');
            $table->integer('area_covered_by_old_tea');
            $table->integer('area_covered_by_young_tea');
            $table->integer('uprooted_area');
            $table->integer('rejuvenated_area');
            $table->string('rejuvenation');
            $table->string('pests');
            $table->string('diseases');
            $table->string('others');
            $table->string('remarks');
            $table->integer('user_id')->unsigned();
            $table->timestamps();
            $table->foreign(    'section_id')->references('id')->on('master_sections')->onDelete('cascade');
            $table->foreign(    'bush_type_id')->references('id')->on('field_bush_types')->onDelete('cascade');
            $table->foreign('bush_name_id')->references('id')->on('field_bush_varieties')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');


        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('field_section_histories');
	}

}
