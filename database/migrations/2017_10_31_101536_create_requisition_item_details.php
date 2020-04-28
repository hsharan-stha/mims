<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRequisitionItemDetails extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inv_requisition_item_details', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('requisition_id')->unsigned();
            $table->integer('item_id')->unsigned();
            $table->integer('quantity');
            $table->date('last_date_of_requirement'); //added
            $table->boolean('urgent'); //added
            $table->string('remarks');
            $table->foreign('requisition_id')->references('id')->on('inv_requisition_details')->onDelete('cascade');
            $table->foreign('item_id')->references('id')->on('inv_items')->onDelete('cascade');
//            $table->foreign('unit_id')->references('id')->on('inv_product_units')->onDelete('cascade');
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
        Schema::drop('inv_requisition_item_details');
    }
}
