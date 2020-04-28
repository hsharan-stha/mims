<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGrnwithposTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('inv_grn_withpos', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('grn_no');
            $table->date('grn_date');
            $table->integer('vendor_chalaan_no');
            $table->string('bill_code');
            $table->integer('bill_no');
            $table->integer('store_id')->unsigned();
            $table->integer('vendor_id')->unsigned();
            $table->string('remarks');
            $table->string('type');
            $table->integer('estate_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->integer('cr_account_head_id')->unsigned();
            $table->timestamps();
            $table->foreign('estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('store_id')->references('id')->on('inv_master_stores')->onDelete('cascade');
            $table->foreign('vendor_id')->references('id')->on('inv_master_vendors')->onDelete('cascade');
            $table->foreign('cr_account_head_id')->references('id')->on('ac_master_account_heads')->onDelete('cascade');

        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('inv_grn_withpos');
	}

}
