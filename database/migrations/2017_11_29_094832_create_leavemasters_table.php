<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLeavemastersTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('pay_master_leaves', function(Blueprint $table) {
            $table->increments( 'id')->index();
            $table->string(     'code')->unique();
            $table->string(     'staff_worker');
            $table->text(       'name' );
            $table->string(     'leave_year');
            $table->string(     'sex');
            $table->boolean(    'carry_forward');
            $table->integer(    'cumulative_balance');
            $table->boolean(    'applicable_for_temporary_worker');
            $table->integer(    'cumulative_year');
            $table->boolean(    'encashable');
            $table->integer(    'minimum_balance_for_encash');
            $table->string(     'maternity_leave');
            $table->boolean(    'allow_ration');
            $table->integer(    'ration_rate');
            $table->string(     'payment_on_sick_leave');
            $table->string(     'short_name');
            $table->string(     'payment_on_this_leave');
            $table->string(     'payment_on_annual_leave');
            $table->string(     'L_W_A');
            $table->integer(    'payment_percent');
            $table->string(     'payment_on_FC');
            $table->string(     'leave_type');
            $table->string(     'holiday_payment');
            $table->integer(    'estate_id')->unsigned();
            $table->integer(    'division_id')->unsigned();
            $table->integer(    'user_id')->unsigned();
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
		Schema::drop('pay_master_leaves');
	}

}
