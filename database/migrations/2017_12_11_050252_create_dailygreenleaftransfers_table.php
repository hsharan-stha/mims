<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDailygreenleaftransfersTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('fac_daily_green_leaf_transfers', function(Blueprint $table) {
            $table->increments( 'id')->index();
            $table->integer(    'from_division_id')->unsigned();
            $table->integer(    'to_division_id')->unsigned();
            $table->integer(    'quantity');
            $table->integer(    'user_id')->unsigned();
            $table->integer(    'estate_id')->unsigned();
            $table->string(     'transfer_date');
            $table->timestamps();
            $table->foreign('from_division_id')->references('id')->on('master_divisions')->ondelete('cascade');
            $table->foreign('to_division_id')->references('id')->on('master_divisions')->ondelete('cascade');
            $table->foreign('estate_id')->references('id')->on('master_tea_estates')->ondelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->ondelete('cascade');


        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('fac_daily_green_leaf_transfers');
	}

}
