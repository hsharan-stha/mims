<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class DirectPOItem extends Model implements Transformable
{
    use TransformableTrait;

    protected  $table = 'inv_direct_po_items';

    protected $fillable = ['id','item_id','quantity','rate','unit_id','value','vat','total'];

}
