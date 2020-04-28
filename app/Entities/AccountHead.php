<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class AccountHead extends Model implements Transformable
{
    use TransformableTrait;

    protected $table='ac_master_account_heads';

    protected $fillable = ['name','group_code','group_master_code','transact','tr_level','editable','mailing_name','mailing_address','pan_no','mailing_country','mailing_estate','estate_id','user_id'];


    public function parent()
    {

        return $this->belongsTo('App\Entities\AccountHead', 'group_master_code','group_code');

    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */

    public function children()
    {

        return $this->hasMany('App\Entities\AccountHead', 'group_master_code', 'group_code');
    }

    public function accountTransactionSplits(){
        return $this->hasMany('App\Entities\AccountTransactionSplits','account_head_id','id');
    }
    

}
