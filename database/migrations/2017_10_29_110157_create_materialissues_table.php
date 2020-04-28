<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMaterialissuesTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('inv_material_issues', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('issue_no');
            $table->date('issue_date');
            $table->integer('store_id');
            $table->integer('dr_account_head_id')->unsigned();
            $table->string('relate_to');
            $table->string('remarks');
            $table->integer('estate_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->foreign('estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('dr_account_head_id')->references('id')->on('ac_master_account_heads')->onDelete('cascade');

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
		Schema::drop('inv_material_issues');
	}

}
