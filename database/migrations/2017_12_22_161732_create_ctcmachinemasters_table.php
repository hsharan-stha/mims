<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCTCMachineMastersTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ctc_machine_masters', function(Blueprint $table) {
            $table->increments('id');
            $table->string('code');
            $table->string('name');
            $table->string('manufacturer');
            $table->string('installation_date');
            $table->string('user_id')->unsigned();
            $table->string('estate_id')->unsigned();
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
		Schema::drop('ctcmachinemasters');
	}

}
