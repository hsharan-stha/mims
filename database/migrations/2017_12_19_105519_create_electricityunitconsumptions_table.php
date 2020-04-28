<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateElectricityunitconsumptionsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('electricityunitconsumptions', function(Blueprint $table) {
            $table->increments('id');
            $table->timestamp('date');
            $table->string('consumption');
            $table->boolean('manufacturing');
            $table->boolean('other');
            $table->boolean('irrigation');
            $table->integer('user_id');
            $table->integer('estate_id');
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
		Schema::drop('electricityunitconsumptions');
	}

}
