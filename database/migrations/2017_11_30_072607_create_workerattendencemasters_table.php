<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkerattendencemastersTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('pay_master_worker_attendences', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer(    'estate_id')->unsigned();
            $table->integer(    'division_id')->unsigned();
            $table->integer(    'user_id')->unsigned();
            $table->string(     'worker_id')->index();
            $table->date(       'date');
            $table->string(     'attendence_status');
            $table->string(     'attendence_type');
            $table->integer(    'activity_id')->unsigned();
            $table->integer(    'paybook_id')->unsigned();
            $table->integer(    'section_id')->unsigned();
            $table->integer(    'leave_id')->unsigned();
            $table->integer(    'holiday_id')->unsigned();
            $table->string(     'bela_1');
            $table->string(     'bela_2');
            $table->string(     'bela_3');
            $table->integer(    'total_task');
            $table->string(     'ot');
            $table->string(     'basic_pay');
            $table->integer(    'ot_rate');
            $table->integer(    'earnings');
            $table->integer(    'deductions');
            $table->integer(    'mandays');
            $table->integer(    'actual_mandays');
            $table->integer(    'wages');
            $table->integer(    'ot_wages');
            $table->timestamps();
            $table->foreign(    'estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');
            $table->foreign(    'division_id')->references('id')->on('master_divisions')->onDelete('cascade');
            $table->foreign(    'section_id')->references('id')->on('master_sections')->onDelete('cascade');
            $table->foreign(    'activity_id')->references('id')->on('act_master_activities')->onDelete('cascade');
            $table->foreign(    'paybook_id')->references('id')->on('master_paybooks')->onDelete('cascade');
            $table->foreign(    'user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign(    'leave_id')->references('id')->on('pay_master_leaves')->onDelete('cascade');
            $table->foreign(    'holiday_id')->references('id')->on('master_holidays')->onDelete('cascade');

        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('pay_master_worker_attendences');
	}

}
