<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class GardenDailyLeaf extends Model implements Transformable
{
    use TransformableTrait;

    protected  $table = 'fac_garden_daily_leafs';

    protected $fillable = ['id','section_id','weight_date','green_leaf','fine_percentage','fine_green_leaf','rainfall','todate','user_id','estate_id'];


    public function section(){
        return $this->belongsTo('App\Entities\Section','section_id','id');
    }
}
