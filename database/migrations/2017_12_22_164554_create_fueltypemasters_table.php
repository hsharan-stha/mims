<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFueltypemastersTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('fuel_type_masters', function(Blueprint $table) {
            $table->increments('id');
            $table->string('code');
            $table->string('name');
            $table->string('unit');
            $table->integer('user_id')->unsigned();
            $table->integer('estate_id')->unsigned();
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
		Schema::drop('fueltypemasters');
	}

}
