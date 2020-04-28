<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MaterialIssueDetailsItems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inv_material_issue_details_items', function (Blueprint $table){
            $table->increments('id')->index();
            $table->integer('material_issue_id')->unsigned();
            $table->integer('item_id')->unsigned();
            $table->integer('quantity');
            $table->integer('rate');
            $table->integer('value');
            $table->string('remarks');
            $table->string('consumed_detail');
            $table->integer('cr_account_head_id')->unsigned();
            $table->timestamps();
            $table->foreign('material_issue_id')->references('id')->on('inv_material_issues')->onDelete('cascade');
            $table->foreign('item_id')->references('id')->on('inv_items')->onDelete('cascade');
            $table->foreign('cr_account_head_id')->references('id')->on('ac_master_account_heads')->onDelete('cascade');




        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('inv_material_issue_details_items');
    }
}
