<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\TeaStockTransactionRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Excel;
class ProductionStockController extends ApiBaseController
{
    protected $teaStockTransactionRepository;
    public function __construct(TeaStockTransactionRepository $teaStockTransactionRepository)
    {
        $this->teaStockTransactionRepository= $teaStockTransactionRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $date_from = '2017-01-01';
            $date_to = date('Y-m-d');
            if ($request->production_tea_estate != 'null' && $request->production_tea_estate != null && $request->production_tea_estate != '') {
                $tea_stocks = $this->teaStockTransactionRepository->with(['teaPack','teaGrade'])->orderBy('created_at', 'desc')->findWhere(['date' => [$date_from, '<>', $date_to], 'estate_id' => $request->production_tea_estate])->groupBy('tea_pack_id');
                $data = array();
                $i=0;
                foreach ($tea_stocks as $tea_stock) {
                    $productionStock = [];
                    $productionStock['teaPack']=$tea_stock[0]->teaPack;
                    $productionStock['teaGrade']=$tea_stock[0]->teaGrade;
                    $productionStock['net_per_bag']=$tea_stock[0]->net_per_bag;
                    $productionStock['total_qty']=0;
                    $productionStock['quality_of_bag']= $tea_stock[0]->quality_of_bag;
                    $productionStock['no_of_bag']=0;
                    foreach($tea_stock as $stock){
                        if($stock->total_qty < 0){
                            $productionStock['no_of_bag']=$productionStock['no_of_bag']-$stock->no_of_bag;
                            $productionStock['total_qty']=$productionStock['total_qty']+$stock->total_qty;
                        }else{
                            $productionStock['no_of_bag']=$productionStock['no_of_bag']+$stock->no_of_bag;
                            $productionStock['total_qty']=$productionStock['total_qty']+$stock->total_qty;
                        }
                    }
                    if($productionStock['total_qty'] != 0) {
                        $data[$i]=$productionStock;
                        $i++;
                    }
                }

                if($request->report =='true' || $request->report == true){
                    $data['productionStocks']=$data;
                    $data['date']['date_from_en'] = $date_to;
                    $data['date']['date_from_np'] = $this->dateConverterEToN($date_to);
                    Excel::create('Production Stock Report', function ($excel) use ($data) {
                        $excel->setTitle('Production Stock Report');
                        $excel->setCreator('Phoenix Solutions')
                            ->setCompany('Phoenix Solutions');
                        $excel->setDescription('Production Stock Report');
                        $excel->sheet('First sheet', function ($sheet) use ($data) {
                            $sheet->loadView('reports.manufacturing.production_stock_report', $data);

                        });
                    })->export('xls');
                }
                return $this->respondWithMessage("Data Retreived Successfully", $data);
            } else {
                return $this->respondWithError("Factory not Found ");
            }
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
