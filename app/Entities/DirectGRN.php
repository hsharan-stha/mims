<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class DirectGRN extends Model implements Transformable
{
    use TransformableTrait;

    protected  $table = 'inv_grns';

    protected $fillable = ['id','grn_no','type','date','receipt_no',
        'remarks','cr_account_head_id','user_id','estate_id'];


    public function grnItems(){
        return $this->hasMany('App\Entities\DirectGRNItem','grn_id','id');
    }

    public function crAccountHead(){
        return $this->belongsTo('App\Entities\AccountHead','cr_account_head_id','id');
    }
}
