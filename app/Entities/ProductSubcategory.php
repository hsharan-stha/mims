<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class ProductSubcategory extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'inv_product_subcategories';

    protected $fillable = ['id','code','name','category_id','user_id','estate_id'];

    public function productCategory(){
        return $this->belongsTo('App\Entities\ProductCategory','category_id','id');
    }


    public function item(){
        return $this->hasMany('App\Entities\Item','item_id','id');
    }
}
