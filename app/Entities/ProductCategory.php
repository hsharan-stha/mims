<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class ProductCategory extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'inv_product_categories';

    protected $fillable = ['id', 'code', 'name', 'valuation_method', 'user_id', 'estate_id'];

    public function items()
    {
        return $this->hasMany(Item::class, 'product_category_id', 'id');
    }

//    public function productSubcategory(){
//        return $this->hasMany('App\Entities\ProductSubcategory','category_id','id');
//    }

//    public function parent(){
//        return $this->belongsTo('App\Entities\ProductCategory','parent_id','id');
//    }
//
//    public function children(){
//        return $this->hasMany('App\Entities\ProductCategory','parent_id','id');
//    }


}
