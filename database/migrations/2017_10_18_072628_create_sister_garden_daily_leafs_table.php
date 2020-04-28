<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSisterGardenDailyLeafsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fac_sister_garden_daily_leafs', function (Blueprint $table) {
            $table->increments('id')->index();
            $table->date('weight_date');
            $table->integer('green_leaf');
            $table->integer('fine_percentage');
            $table->integer('fine_green_leaf');
            $table->integer('rate');
            $table->string('receipt_no');
            $table->string('amount');
            $table->integer('sister_garden_id')->unsigned();
            $table->integer('todate');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('sister_garden_id')->references('id')->on('fac_master_sister_gardens')->onDelete('cascade');
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
        Schema::drop('fac_sister_garden_daily_leafs');

    }
}
