<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePowithrequisitiondetailsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 * @return void
	 */
	public function up()
	{
		Schema::create('inv_powith_requisition_details', function(Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('division_id')->unsigned();
            $table->string('po_no');
            $table->string('po_date');
            $table->string('extra_ref');
            $table->string('total_amount'); //added
            $table->date('valid_up_to');
            $table->string('store_id'); //updated
            $table->string('vendor_id'); //updated
            $table->string('remarks');
            $table->string('type');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
		Schema::drop('inv_powith_requisition_details');
	}

}
