<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAccounttransactionsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ac_account_transactions', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer(   'ac_head_id')->unsigned();
            $table->integer(   'value');
            $table->integer(   'cost_center_id')->unsigned();
            $table->string(    'remarks');
            $table->timestamps();
            $table->foreign(    'ac_head_id')->references('id')->on('ac_master_account_heads')->ondelete('cascade');
            $table->foreign(    'cost_center_id')->references('id')->on('master_costcenters')->ondelete('cascade');
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('ac_account_transactions');
	}

}
