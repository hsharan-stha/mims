<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class DirectGRNItem extends Model implements Transformable
{
    use TransformableTrait;

    protected  $table = 'inv_grn_items';

    protected $fillable = ['id','item_id','quantity','direct_grn_id','rate','value','vat','total','unit_id','remarks',
        'dr_account_head_id'];


    public function grn(){
        return $this->belongsTo('App\Entities\DirectGRN','grn_id','id');
    }

    public function item(){
        return $this->belongsTo('App\Entities\Item','item_id','id');
    }

    public function unit(){
        return $this->belongsTo('App\Entities\Unit','unit_id','id');
    }

    public function drAccountHead(){
        return $this->belongsTo('App\Entities\AccountHead','dr_account_head_id','id');
    }
}

