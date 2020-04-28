<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class StoreTransferMaster extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'store_transfer_master';
    protected $fillable = ['id', 'date', 'from_store_id', 'to_store_id'];

    public function storeTransferItems()
    {
        return $this->hasMany(StoreTransferItems::class, 'st_m_id', 'id');
    }

    public function fromstore()
    {
        return $this->belongsTo('App\Entities\Store', 'from_store_id', 'id');
    }

    public function tostore()
    {
        return $this->belongsTo('App\Entities\Store', 'to_store_id', 'id');
    }

}
