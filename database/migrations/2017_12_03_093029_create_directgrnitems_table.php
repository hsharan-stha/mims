<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDirectgrnitemsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('inv_direct_grn_items', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('item_id')->unsigned();
            $table->integer('direct_grn_id')->unsigned();
            $table->integer('quantity');
            $table->integer('rate');
            $table->integer('value');
            $table->integer('vat');
            $table->integer('total');
            $table->integer('unit_id')->unsigned();
            $table->integer('dr_account_head_id')->unsigned();
            $table->string('remarks');
            $table->timestamps();
            $table->foreign('item_id')->references('id')->on('inv_items')->onDelete('cascade');
            $table->foreign('direct_grn_id')->references('id')->on('inv_items')->onDelete('cascade');
            $table->foreign('unit_id')->references('id')->on('inv_product_units')->onDelete('cascade');
            $table->foreign('dr_account_head_id')->references('id')->on('ac_master_account_heads')->onDelete('cascade');
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('inv_direct_grn_items');
	}

}
