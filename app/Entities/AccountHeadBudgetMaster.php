<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class AccountHeadBudgetMaster extends Model implements Transformable
{
    use TransformableTrait;

    protected $table='bdg_budget_account_heads';

    protected $fillable = ['fiscal_year_id','budget_code','ac_code','amount'];

    public function fiscalYear(){
        return $this->belongsTo('App\Entities\FiscalYear','fiscal_year_id','id');

    }

    public function accountHead(){
        return $this->belongsTo('App\Entities\AccountHead','ac_code','group_code');
    }

    public function budgetHead(){
        return $this->belongsTo('App\Entities\AccountBudget','budget_code','budget_code');
    }



}
