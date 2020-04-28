<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStoretransactionsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('inv_store_transactions', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer(   'store_id')->unsigned();
            $table->integer(   'item_id')->unsigned();
            $table->integer(   'quantity');
            $table->integer(   'rate');
            $table->integer(   'value');
            $table->integer(   'total');
            $table->string(    'remarks');
            $table->timestamps();
            $table->foreign(   'store_id')->references('id')->on('inv_master_stores')->onDelete('cascade');
            $table->foreign(   'item_id')->references('id')->on('inv_items')->onDelete('cascade');

        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('inv_store_transactions');
	}

}
