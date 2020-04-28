<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeagradesortingsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('fac_tea_grade_sortings', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->date('unsorted_date');
            $table->date('last_sorted_date');
            $table->string('tea_grade');
            $table->integer('dryer_id')->unsigned();
            $table->date('sort_date');
            $table->string('total_unsorted_tea');
            $table->string('total_sorted_gross');
            $table->foreign('dryer_id')->references('id')->on('fac_master_dryers')->onDelete('cascade');
            $table->integer('estate_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->foreign('estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
		Schema::drop('fac_tea_grade_sortings');
	}

}
