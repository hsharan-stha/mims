<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDirectpoitemsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('inv_direct_po_items', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('item_id')->unsigned();
            $table->integer('quantity');
            $table->integer('rate');
            $table->integer('value');
            $table->integer('vat');
            $table->integer('total');
            $table->string('remarks');
            $table->foreign('item_id')->references('id')->on('inv_items')->onDelete('cascade');
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
		Schema::drop('inv_direct_po_items');
	}

}
