<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Vendor extends Model implements Transformable
{
    use TransformableTrait;

    protected  $table='inv_master_vendors';

    protected $fillable = ['code','name','address','contact_no','estate_id','user_id'];

}
