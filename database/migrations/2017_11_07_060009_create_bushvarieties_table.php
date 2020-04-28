<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBushvarietiesTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('field_bush_varieties', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->string('code')->unique();
            $table->integer('bush_type_id')->unsigned();
            $table->boolean('link_with_store_item');
            $table->integer('item_id')->unsigned();
            $table->integer('estate_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->foreign('estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('item_id')->references('id')->on('inv_items')->onDelete('cascade');
            $table->foreign('bush_type_id')->references('id')->on('field_bush_types')->onDelete('cascade');
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
		Schema::drop('field_bush_varieties');
	}

}
