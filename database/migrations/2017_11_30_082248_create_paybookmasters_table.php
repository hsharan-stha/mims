<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaybookmastersTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('act_master_paybooks', function(Blueprint $table) {
            $table->increments( 'id')->index();
            $table->integer(    'estate_id')->unsigned();
            $table->integer(    'user_id')->unsigned();
            $table->string(     'code')->unique();
            $table->string(     'name');
            $table->integer(    'activity_id')->unsigned();
            $table->string(     'applicable_sex');
            $table->string(     'min_task');
            $table->integer(    'min-rate');
            $table->boolean(    'ot_task_flag');
            $table->integer(    'ot_rate');
            $table->date(       'applied_date');
            $table->boolean(    'status');
            $table->boolean(    'leave_with_wages');
            $table->boolean(    'addative');
            $table->string(     'worker_category');
            $table->integer(    'earning');
            $table->integer(    'deduction');
            $table->timestamps();
            $table->foreign(    'estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');
            $table->foreign(    'activity_id')->references('id')->on('act_master_activities')->onDelete('cascade');
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
		Schema::drop('act_master_paybooks');
	}

}
