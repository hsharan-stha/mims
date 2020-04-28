<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGrnwithpoitemsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('inv_grn_with_poitems', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('grn_po_id')->unsigned();
            $table->integer('po_id')->unsigned();
            $table->integer('item_id')->unsigned();
            $table->integer('quantity');
            $table->integer('rate');
            $table->integer('value');
            $table->integer('vat');
            $table->integer('total');
            $table->string('remarks');
            $table->integer('dr_account_head_id')->unsigned();
            $table->timestamps();
            $table->foreign('grn_po_id')->references('id')->on('inv_grn_withpos')->onDelete('cascade');
            $table->foreign('item_id')->references('id')->on('inv_items')->onDelete('cascade');
            $table->foreign('dr_account_head_id')->references('id')->on('ac_master_account_heads');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('inv_grn_with_poitems');
	}

}
