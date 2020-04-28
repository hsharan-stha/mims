<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePoItemsWithRequisitionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inv_po_item_with_requisition_details', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('po_item_requisition_id');
            $table->integer('requisition_id')->unsigned();
            $table->integer('item_id')->unsigned();
            $table->integer('quantity');
            $table->string('rate');
            $table->string('value');
            $table->string('vat');
            $table->string('total');
            $table->string('remarks');
            $table->foreign('requisition_id')->references('id')->on('inv_requisition_details')->onDelete('cascade');
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
        Schema::drop('inv_po_item_with_requisition_details');
    }
}
