<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDirectgrnsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('inv_direct_grns', function(Blueprint $table) {
            $table->increments( 'id')->index();
            $table->string(     'code')->unique();
            $table->integer(    'direct_grn_no');
            $table->string(     'remarks');
            $table->integer(    'cr_account_head_id')->unsigned();
            $table->date(       'date');
            $table->integer(    'receipt_no');
            $table->string(     'dr_account_head');
            $table->string(     'dr_account_sub_head');
            $table->string(     'cr_account_head');
            $table->string(     'cr_account_sub_head');
            $table->string(     'bill_code');
            $table->integer(    'bill_no');
            $table->timestamps();
            $table->foreign(    'cr_account_head_id')->references('id')->on('ac_master_account_heads')->onDelete('cascade');

        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('inv_direct_grns');
	}

}
