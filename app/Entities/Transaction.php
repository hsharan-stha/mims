<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Transaction extends Model implements Transformable
{
    use TransformableTrait;

    protected  $table='ac_transactions';

    protected $fillable = ['id','account_head_id','amount','bill_code','remarks','date'];

}
