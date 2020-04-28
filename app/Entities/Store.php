<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Store extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'inv_master_stores';

    protected $fillable = ['code', 'name', 'address', 'contact_no', 'user_id', 'estate_id'];


    public function pvMasters()
    {
        return $this->hasMany(ProductionVoucherMaster::class, 'store_id', 'id');
    }

    public function storeTransferMasters()
    {
        return $this->hasMany(StoreTransferMaster::class, 'from_store_id', 'id');
    }

    public function storeTransferMasters1()
    {
        return $this->hasMany(StoreTransferMaster::class, 'to_store_id', 'id');
    }
}
