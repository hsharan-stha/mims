<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class BOMMaster extends Model implements Transformable
{
    use TransformableTrait;
    protected $table = 'bom_master';

    protected $fillable = [
        'id', 'code', 'name', 'status'
    ];

    public function bomItems()
    {
        return $this->hasMany(BOMItem::class, 'bom_id', 'id');
    }

    public function pvMasters()
    {
        return $this->hasMany(ProductionVoucherMaster::class, 'bom_id', 'id');
    }

}
