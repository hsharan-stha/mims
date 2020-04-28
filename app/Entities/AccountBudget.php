<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class AccountBudget extends Model implements Transformable
{
    use TransformableTrait;

    protected $table='bdg_account_head_estimations';

    protected $fillable = ['budget_name','budget_code','user_id','estate_id'];

    public function accountHeads(){
        return $this->hasMany('App\Entities\AccountHeadBudgetMaster','budget_code','budget_code');
    }

    public function accountBudgetDetails(){
        return $this->hasMany('App\Entities\AccountBudgetDetails','budget_code','budget_code');
    }

}
