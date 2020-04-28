<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEarningmastersTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('pay_master_earnings', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->string(    'code')->unique();
            $table->integer(   'amount');
            $table->integer(   'percentage');
            $table->integer(   'check_percentage');
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
		Schema::drop('pay_master_earnings');
	}

}
