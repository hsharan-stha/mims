<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class FiscalYear extends Model implements Transformable
{
    use TransformableTrait;

    protected $table='master_fiscal_years';

    protected $fillable = ['name','start_date','end_date','current','user_id','estate_id'];

    public function inventorySetups(){
        return $this->hasMany('App\Entities\InventorySetup','fiscal_year_id','id');
    }

}
