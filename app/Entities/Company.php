<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Company extends Model implements Transformable
{
    use TransformableTrait;

    protected $table='master_companies';

    protected $fillable = ['code','name','address1','address2','state','fax','phone','email','contact_person','contact_no','created_at','updated_at'];

}
