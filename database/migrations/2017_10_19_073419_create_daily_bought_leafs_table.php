<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDailyBoughtLeafsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fac_daily_bought_leafs', function (Blueprint $table) {
            $table->increments('id')->index();
            $table->string('name',30);
            $table->string('address',255);
            $table->date('weight_date');
            $table->integer("green_leaf");
            $table->integer('fine_percentage');
            $table->integer('fine_green_leaf');
            $table->integer('rate');
            $table->string('receipt_no');
            $table->string('amount');
            $table->integer('supplier_id')->unsigned();
            $table->integer('todate');
            $table->integer('estate_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->foreign('estate_id')->references('id')->on('master_tea_estates')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('supplier_id')->references('id')->on('fac_master_suppliers')->onDelete('cascade');
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
        Schema::drop('fac_daily_bought_leafs');
    }
}
