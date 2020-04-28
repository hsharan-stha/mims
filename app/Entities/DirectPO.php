<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class DirectPO extends Model implements Transformable
{
    use TransformableTrait;

    protected  $table = 'inv_direct_pos';

    protected $fillable = ['id','purchase_order_no','po_date','date','valid_upto','extra_ref','store','vendor'];

}
