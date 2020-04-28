<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ac_transactions', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('account_head_id')->unsigned();
            $table->integer('amount');
            $table->integer('bill_code');
            $table->string('remarks');
            $table->string('date');
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
		Schema::drop('ac_transactions');
	}

}
