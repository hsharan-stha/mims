<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Garden extends Model implements Transformable
{
    use TransformableTrait;

    protected $table='master_gardens';

    protected $fillable = ['code','name','address','contact_person','contact_no','created_at','updated_at'];

}
