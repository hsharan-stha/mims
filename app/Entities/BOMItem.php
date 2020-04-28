<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class BOMItem extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'bom_items';
    protected $fillable = ['id', 'item_id', 'bom_id', 'type', 'qty', 'updated_at', 'created_at'];

    public function bomMaster()
    {
        return $this->belongsTo('App\Entities\BOMMaster', 'bom_id', 'id');
    }

    public function item()
    {
        return $this->belongsTo('App\Entities\Item', 'item_id', 'id');

    }
}
