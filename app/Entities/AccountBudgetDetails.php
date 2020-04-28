<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class AccountBudgetDetails extends Model implements Transformable
{
    use TransformableTrait;

    protected $table='bdg_account_budget_details';

    protected $fillable = ['fiscal_year_id','budget_code','amount'];


    public function fiscalYear(){
        return $this->belongsTo('App\Entities\FiscalYear','fiscal_year_id','id');

    }

}
