<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class JournalVoucherForm extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'ac_journal_voucher_forms';

    protected $fillable = ['id','date','voucher_no','account_head_id','cost_center_id','value','remarks','reference','user_id','estate_id'];

    public function accountHead(){
        return $this->belongsTo('App\Entities\AccountHead','account_head_id','id');
    }

    public function costCenter(){
        return $this->belongsTo('App\Entities\CostCenter','cost_center_id','id');
    }
}
