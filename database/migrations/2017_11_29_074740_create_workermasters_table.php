<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkermastersTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('act_master_workers', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->string( 'code')->unique();
            $table->string( 'name');
            $table->string( 'address');
            $table->string(    'contact_no');
            $table->string( 'contact_person');
            $table->integer(    'contact_person_no');
            $table->string( 'type');
            $table->integer(    'estate_id')->unsigned();
            $table->integer(    'division_id')->unsigned();
            $table->integer(    'user_id')->unsigned();
            $table->string( 'sex');
            $table->string( 'marital_status')->index();
            $table->date(   'dob');
            $table->string( 'blood-group');
            $table->string( 'education');
            $table->integer(    'pf_number');
            $table->boolean(    'pf_flag');
            $table->boolean( 'lic_flag');
            $table->integer(    'lic_number');
            $table->date(   'join_date');
            $table->integer(    'house_no');
            $table->string( 'status')->index();
            $table->timestamps();
            $table->foreign(    'estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');
            $table->foreign(    'division_id')->references('id')->on('master_divisions')->onDelete('cascade');
            $table->foreign(    'user_id')->references('id')->on('users')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('act_worker_masters');
	}

}
