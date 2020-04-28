<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->increments('id')->index();
            $table->string(    'name');
            $table->string(    'gender');
            $table->date(      'dob');
            $table->string(    'phone');
            $table->string(    'mobile');
            $table->string(    'address_line_1');
            $table->string(    'address_line_2');
            $table->string(    'vdc_municipality');
            $table->string(    'district');
            $table->string(    'zone');
            $table->string(    'country');
            $table->string(    'temporary_address');
            $table->string(    'temporary_phone');
            $table->string(    'temporary_mobile');
            $table->string(    'image');
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
        Schema::drop('profiles');
    }
}
