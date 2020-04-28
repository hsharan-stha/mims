<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class ConsumptionParticularMaster extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'fac_master_consumption_particulars';

    protected $fillable = ['id','name','user_id','estate_id'];

}
