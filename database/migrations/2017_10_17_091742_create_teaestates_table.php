<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeaestatesTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('master_tea_estates', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->string('code')->unique();
            $table->string('name');
            $table->string('address');
            $table->string('manager');
            $table->integer(    'user_id')->unsigned();
            $table->integer(    'estate_id')->unsigned();
            $table->timestamps();
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
		Schema::drop('master_tea_estates');
	}

}
