<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeapacksTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('fac_tea_packs', function(Blueprint $table) {
            $table->increments( 'id')->index();
            $table->date(       'pack_date');
            $table->integer(    'invoice_no');
            $table->integer(    'tea_grade_id')->unsigned();
            $table->integer(    'no_of_bag');
            $table->integer(    'net_per_bag');
            $table->integer(    'total_qty');
            $table->string(     'quality_of_bag', 255);
            $table->string(     'remarks');
            $table->integer(    'user_id')->unsigned();
            $table->integer(    'estate_id')->unsigned();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('tea_grade_id')->references('id')->on('fac_master_tea_grades')->onDelete('cascade');
            $table->foreign('estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');

        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('fac_tea_packs');
	}

}
