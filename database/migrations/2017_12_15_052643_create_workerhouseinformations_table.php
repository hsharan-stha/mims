<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkerHouseInformationsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('master_worker_house_informations', function(Blueprint $table) {
            $table->increments( 'id')->index();
            $table->integer(    'house_no');
            $table->integer(    'worker_id')->unsigned();
            $table->string(     'house_type');
            $table->string(     'build_year');
            $table->string(     'house_details');
            $table->integer(    'house_length');
            $table->integer(    'house_width');
            $table->string(     'remarks');
            $table->integer(    'user_id')->unsigned();
            $table->integer(    'estate_id')->unsigned();
            $table->timestamps();
            $table->foreign(    'user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign(    'worker_id')->references('id')->on('act_master_workers')->onDelete('cascade');
            $table->foreign(    'estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');

        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('master_worker_house_informations');
	}

}
