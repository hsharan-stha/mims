<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeagradetransfersTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('fac_tea_grade_transfers', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->date('transfer_date');
            $table->string('from_grade');
            $table->string('from_grade_old_quantity');
            $table->string('from_grade_new_quantity');
            $table->string('to_grade');
            $table->string('to_grade_old_quantity');
            $table->string('to_grade_new_quantity');
            $table->string('transfer_quantity');
            $table->string('total_dust');
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
		Schema::drop('fac_tea_grade_transfers');
	}

}
