<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWelfareitemsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('master_welfare_items', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->string('code')->unique();
            $table->string('name');
            $table->boolean('link_with_store_item');
            $table->integer('item_id')->unsigned()->nullable();
            $table->foreign('item_id')->references('id')->on('inv_items')->onDelete('cascade');
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
		Schema::drop('master_welfare_items');
	}

}
