<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('inv_items', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->string('code')->unique();
            $table->string('name');
            $table->string('description');
            $table->integer('product_category_id')->unsigned();
            $table->integer('product_sub_category_id')->unsigned();
            $table->integer('unit_id')->unsigned();
            $table->integer('minimum_stock');
            $table->integer('maximum_stock');
            $table->integer('reorder_quantity');
            $table->integer('current_rate');
            $table->integer('quantity');
            $table->integer('estate_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->foreign('estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
		Schema::drop('inv_items');
	}

}
