<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInventorysetupsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('inv_master_inventory_setups', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('fiscal_year_id')->unsigned();
            $table->boolean('purchase_order_expiry');
            $table->boolean('auto_generate_req_no');
            $table->boolean('auto_generate_po_no');
            $table->boolean('auto_generate_grn_no');
            $table->boolean('auto_generate_missue_no');
            $table->string('pre_req_no');
            $table->string('suf_req_no');
            $table->string('last_req_no');
            $table->string('pre_po_no');
            $table->string('suf_po_no');
            $table->string('last_po_no');
            $table->string('pre_grn_no');
            $table->string('suf_grn_no');
            $table->string('last_grn_no');
            $table->string('pre_missue_no');
            $table->string('suf_missue_no');
            $table->string('last_missue_no');
            $table->string('valuation_method');
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
		Schema::drop('inv_master_inventory_setups');
	}

}
