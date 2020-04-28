<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class PluckingMandaysBudget extends Model implements Transformable
{
    use TransformableTrait;

    protected $table='bdg_plucking_mandays_estimations';

    protected $fillable = ['id','fiscal_year_id','section_id','start_date','end_date','budgeted_date','type',
        'yrly_tea_made','yrly_recovery_percentage','yrly_green_leaf','yrly_production_per_plucker','yrly_mandays',
        'user_id','estate_id'];

    public function pluckingMandaysBudgetDetails(){
        return $this->hasMany('App\Entities\PluckingMandaysBudgetDetails','bdg_plucking_mandays_id','id');
    }

    public function fiscalYear(){
        return $this->belongsTo('App\Entities\FiscalYear','fiscal_year_id','id');
    }

    public function section(){
        return $this->belongsTo('App\Entities\Section','section_id','id');
    }
}
