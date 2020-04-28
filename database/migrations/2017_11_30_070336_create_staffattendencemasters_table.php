<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStaffattendencemastersTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('pay_master_staff_attendences', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->string(    'employee_id');
            $table->string(    'attendence_status');
            $table->string(    'attendence_type');
            $table->integer(    'estate_id')->unsigned();
            $table->integer(    'division_id')->unsigned();
            $table->integer(    'user_id')->unsigned();
            $table->timestamps();
            $table->foreign(    'estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');
            $table->foreign(    'division_id')->references('id')->on('master_divisions')->onDelete('cascade');
            $table->foreign(    'user_id')->references('id')->on('users')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('pay_master_staff_attendences');
	}

}
