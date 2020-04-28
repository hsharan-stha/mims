<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePruneplansTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('field_prune_plans', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('prune_style_id')->unsigned();
            $table->string('prune_type');
            $table->string('mon_1');
            $table->string('mon_2');
            $table->string('mon_3');
            $table->string('mon_4');
            $table->string('mon_5');
            $table->string('mon_6');
            $table->string('mon_7');
            $table->string('mon_8');
            $table->string('mon_9');
            $table->string('mon_10');
            $table->string('mon_11');
            $table->string('mon_12');
            $table->integer('estate_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->foreign('estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
            $table->foreign('prune_style_id')->references('id')->on('field_prune_styles')->onDelete('cascade');

		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('field_prune_plans');
	}

}
