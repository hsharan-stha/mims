<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDirectposTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('inv_direct_pos', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('division_id');
            $table->string('direct_po_no');
            $table->string('direct_po_date');
            $table->string('valid_upto');
            $table->string('extra_ref');
            $table->string('store_id');
            $table->string('vendor_id');
            $table->string('remarks');
            $table->integer('user_id')->unsigned();
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
		Schema::drop('inv_direct_pos');
	}

}
