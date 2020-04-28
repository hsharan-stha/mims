<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class PluckingMandaysBudgetDetails extends Model implements Transformable
{
    use TransformableTrait;

    protected $table='bdg_plucking_mandays_estimation_details';

    protected $fillable = ['bdg_plucking_mandays_id','month_id','month_name','month_tea_made','month_recovery_percentage','month_green_leaf','month_production_per_plucker','month_mandays'];


}
