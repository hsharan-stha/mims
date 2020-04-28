<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 1/10/2018
 * Time: 8:21 AM
 */

namespace App\Http\Controllers\Admin;

use App\Entities\FiscalYear;
use App\Repositories\ItemRepository;
use App\Repositories\StoreTransactionRepository;
use DB;


class ItemPriceCalculator
{
    protected $itemRepository;

    protected $storeTransactionRepository;

    public function __construct(StoreTransactionRepository $storeTransactionRepository,
                                ItemRepository $itemRepository)
    {
        $this->itemRepository = $itemRepository;
        $this->storeTransactionRepository = $storeTransactionRepository;
    }

    public function WAValuation($item_id, $store_id)
    {
//        try {
        $openingTransaction = $this->storeTransactionRepository
            ->orderBy('date', 'desc')
            ->findWhere(['store_id' => $store_id, 'item_id' => $item_id, 'type' => 'ope'])
            ->first();
        if ($openingTransaction != null) {
            $date = $openingTransaction->date;
        } else {
            $date = '*';
        }
        $item_transactions = $this->storeTransactionRepository
            ->findWhere(['store_id' => $store_id, 'item_id' => $item_id, 'date' => [$date, '<>', date('Y-m-d 23:59:59')]]);
        $incoming_items = $item_transactions->filter(function ($item) {
            if ($item->quantity > 0) {
                return $item;
            }
        });
        $outgoing_items = $item_transactions->filter(function ($item) {
            if ($item->quantity < 0) {
                return $item;
            }
        });
        $value = $incoming_items->sum('total') - $outgoing_items->sum('total');
        $quantity = $incoming_items->sum('quantity') + $outgoing_items->sum('quantity');
        if ($quantity > 0) {
            $rate = round($value / $quantity, 2);
        } else {
            $rate = 0;
        }
        return ['value' => $value, 'quantity' => $quantity, 'rate' => $rate];
//        } catch (\Exception $e) {
//            return ['value' => 0, 'quantity' =>0, 'rate' => 0];
//        }
    }

    public function WAValuationBySQL($item_id, $date)
    {
        $fiscal_start_date = FiscalYear::where('current', 1)->pluck('start_date');

        return DB::select(
            DB::raw("SELECT sum(quantity) as quantity,sum(total)/sum(quantity) as rate,sum(total) as total
                                 FROM ps_inv_store_transactions
                                 where item_id=$item_id
                                  and
                                 date BETWEEN '$fiscal_start_date' AND '$date'
                                 order by date desc 
                                "));
    }

    public function FIFOValuation($item_id, $store_id)
    {
//        try {
        $openingTransaction = $this->storeTransactionRepository
            ->orderBy('date', 'desc')
            ->findWhere(['store_id' => $store_id, 'item_id' => $item_id, 'type' => 'ope'])
            ->first();
        if ($openingTransaction != null) {
            $date = $openingTransaction->date;
        } else {
            $date = '*';
        }
        DB::beginTransaction();
        DB::statement("SET @row_number=0");
        DB::statement("SET @csum=0");
        DB::statement("SET @cssum=0");
        DB::statement("SET @sn=0");
        $item_transactions = DB::select(DB::raw("SELECT *,(@cssum := @cssum + closing_stock) as cs_sum from( select *, case when cumulative>0 and quantity>=cumulative then cumulative*rate when cumulative>0 and quantity<cumulative then quantity*rate else 0 end as closing_stock from ( select *, (@csum := @csum + quantity) as cumulative from ( select (@sn := @sn+1) as sn,0 as srl, id,item_id, quantity, rate, date from ps_inv_store_transactions where quantity < 0 and store_id = :store_id1 and item_id=:item_id1 union select (@sn := @sn+1) as sn, (@row_number:=@row_number+1) as srl, id,item_id, quantity, rate,date from ps_inv_store_transactions where quantity >= 0 and store_id = :store_id2 and item_id = :item_id2 ORDER BY srl )as tab ) as maintab ) as outermaintab"),
            array(
                'store_id1' => 1,
                'item_id1' => 2,
                'store_id2' => 1,
                'item_id2' => 2,
            ));
        dd($item_transactions);
        DB::commit();
        return $item_transactions;
//        } catch (\Exception $e) {
//            return ['value' => 0, 'quantity' =>0, 'rate' => 0];
//        }
    }
}

