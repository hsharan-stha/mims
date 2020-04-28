<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class TroughNumber extends Model implements Transformable
{
    use TransformableTrait;

    protected $table='fac_master_trough_numbers';

    protected $fillable = ['id','code','trough_no','manufacturer','installation_date','additional_details','user_id','estate_id'];

    public function estate(){
        return $this->belongsTo('App\Entities\Estate','estate_id','id');
    }
}
