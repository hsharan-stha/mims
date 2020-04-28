<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class CostCenter extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'master_costcenters';

    protected $fillable = ['id','code','name','remarks','user_id','estate_id'];

}