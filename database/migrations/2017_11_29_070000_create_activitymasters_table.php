<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActivitymastersTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('act_master_activities', function(Blueprint $table) {
            $table->increments( 'id')->index();
            $table->integer(    'estate_id')->unsigned();
            $table->integer(    'division_id')->unsigned();
            $table->string(     'nature_of_work');
            $table->string(     'unit_master');
            $table->string(     'code');
            $table->string(     'name');
            $table->integer(    'user_id')->unsigned();
            $table->timestamps();
            $table->foreign(    'estate_id')->references('id')->on('master_tea_estates');
            $table->foreign(    'division_id')->references('id')->on('master_divisions');
            $table->foreign(    'user_id')->references('id')->on('users');
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('act_master_activities');
	}

}
