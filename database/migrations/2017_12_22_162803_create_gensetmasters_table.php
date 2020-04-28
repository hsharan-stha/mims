<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGensetmastersTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('genset_masters', function(Blueprint $table) {
            $table->increments('id');
            $table->string('code');
            $table->string('name');
            $table->string('manufacturer');
            $table->string('installation_date');
            $table->string('user_id')->unsigned();
            $table->string('estate_id')->unsigned();
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
		Schema::drop('gensetmasters');
	}

}
