<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Item extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'inv_items';

    protected $fillable = ['id', 'code', 'account_group_code', 'name', 'description', 'product_category_id', 'parent_id', 'transact', 'unit_id',
        'minimum_stock', 'maximum_stock', 'reorder_quantity', 'essential_item', 'user_id', 'estate_id'];

    public function requistionItemDetails()
    {
        return $this->hasMany('App\Entities\RequisitionItemDetail', 'item_id');
    }

    public function poItemRequisitionDetails()
    {
        return $this->hasMany('App\Entities\POItemRequisitionDetail', 'item_id', 'id');
    }

    public function parent()
    {
        return $this->belongsTo('App\Entities\Item', 'parent_id', 'id');
    }

    public function children()
    {
        return $this->hasMany('App\Entities\Item', 'parent_id', 'id');
    }

    public function productCategory()
    {
        return $this->belongsTo('App\Entities\ProductCategory', 'product_category_id', 'id');
    }

    public function unit()
    {
        return $this->belongsTo('App\Entities\Unit', 'unit_id', 'id');
    }

    public function storeTransactions()
    {
        return $this->hasMany('App\Entities\StoreTransaction', 'item_id', 'id');
    }

    public function bomItems()
    {
        return $this->hasMany(BOMItem::class, 'item_id', 'id');
    }

    public function pvItems()
    {
        return $this->hasMany(ProductionVoucherItem::class, 'item_id', 'id');
    }

    public function sjItems()
    {
        return $this->hasMany(StockJournalItem::class, 'item_id', 'id');
    }

    public function salesItems()
    {
        return $this->hasMany(SalesItems::class, 'item_id', 'id');
    }

    public function storeTransferItems()
    {
        return $this->hasMany(StoreTransferItems::class, 'item_id', 'id');
    }

    public function purchaseReturnItems()
    {
        return $this->hasMany(PurchaseReturnItems::class, 'item_id', 'id');
    }

    public function salesReturnItems()
    {
        return $this->hasMany(SalesReturnItems::class, 'item_id', 'id');
    }

    public function issueReturnItems()
    {
        return $this->hasMany(IssueReturnItems::class, 'item_id', 'id');
    }

}
