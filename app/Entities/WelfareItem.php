<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class WelfareItem extends Model implements Transformable
{
    use TransformableTrait;

    protected  $table = 'master_welfare_items';

    protected $fillable = ['id','code','name','link_with_store_item','item_id','user_id','estate_id'];

    public function item(){
        return $this->belongsTo('App\Entities\Item','item_id','id');
    }

}
