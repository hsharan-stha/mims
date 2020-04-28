<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLeavetypesTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('master_leavetypes', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->string('code')->unique();
            $table->string('name');
            $table->string('sex');
            $table->string('employee_type');
            $table->integer('payment_percent');
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
		Schema::drop('master_leavetypes');
	}

}
