<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Division extends Model implements Transformable
{
    use TransformableTrait;

    protected $table='master_divisions';

    protected $fillable = ['code','name','type','created_at','updated_at'];


    public function poRequisitionDetail(){
        return $this->hasMany('App\Entities\PORequisitionDetail','division_id','id');
    }

    public function sections(){
        return $this->hasMany('App\Entities\Section','division_id','id');
    }

}
