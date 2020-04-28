<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Unit extends Model implements Transformable
{
    use TransformableTrait;

    protected $table='inv_product_units';

    protected $fillable = ['id','code','name','user_id','estate_id'];

}
