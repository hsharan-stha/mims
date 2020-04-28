<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\DB;

class EvaluationController
{
    public function valuation($fiscal_start_date, $item_id,$input_quantity)
    {
        $transaction = DB::select(
            DB::raw("SELECT sum(quantity) as quantity, 
                    sum(total) as total
                     FROM ps_inv_store_transactions 
                     where item_id=$item_id 
                     and 
                     date BETWEEN '$fiscal_start_date' AND CURRENT_DATE 
                          "));
        $rate= $transaction[0]->total/$transaction[0]->quantity;
        return $rate;
//        $totalquantity = DB::select(
//            DB::raw("SELECT sum(rest_quantity) as rest_quantity
//                                 FROM ps_inv_store_transactions
//                                 where item_id=$item_id
//                                  and rest_quantity > 0 and
//                                 date BETWEEN '$fiscal_start_date' AND CURRENT_DATE
//                                order by id
//                                "));

//        if ($totalquantity[0]->rest_quantity < $input_quantity) {
//            DB::select(DB::raw("delete from ps_sales_items where sales_id=$master_id"));
//            DB::select(DB::raw("delete from ps_sales_master where id=$master_id"));

//            return 0;
//        }

//        $store_transaction = DB::select(
//            DB::raw("SELECT id,rest_quantity,rate
//                                 FROM ps_inv_store_transactions
//                                 where item_id=$item_id
//                                  and rest_quantity > 0 and
//                                 date BETWEEN '$fiscal_start_date' AND CURRENT_DATE
//                                 order by id
//                                "));
//
//        $totalrate = 0;
//        for ($r = 0; $input_quantity > 0; $r++) {
//            $id = $store_transaction[$r]->id;
//            if ($store_transaction[$r]->rest_quantity < $input_quantity) {
//                $rest_quantity = 0;
//                $totalrate = $totalrate + ($store_transaction[$r]->rate * $store_transaction[$r]->rest_quantity);
//            } else {
//                $rest_quantity = $store_transaction[$r]->rest_quantity - $input_quantity;
//                $totalrate = $totalrate + ($store_transaction[$r]->rate * $input_quantity);
//            }
//            $input_quantity = $input_quantity - $store_transaction[$r]->rest_quantity;
//
//            DB::select(
//                DB::raw("update ps_inv_store_transactions set rest_quantity=$rest_quantity
//                                 where id=$id
//                                "));
//        }
//        return $totalrate;
    }

}
