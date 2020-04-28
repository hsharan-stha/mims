<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGardenDailyLeafsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fac_garden_daily_leafs', function (Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('section_id')->unsigned();
            $table->date('weight_date');
            $table->integer('green_leaf');
            $table->integer('fine_percentage');
            $table->integer('fine_green_leaf');
            $table->string('rainfall');
            $table->integer('todate');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('section_id')->references('id')->on('master_sections')->onDelete('cascade');
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
        Schema::drop('fac_garden_daily_leafs');

    }
}
