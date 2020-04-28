<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 12/24/2017
 * Time: 4:34 PM
 */

namespace App\Http\Controllers\Admin;


use App\Repositories\FiscalYearRepository;
use App\Repositories\InventorySetupRepository;

class FscInvStpCalc
{
    protected $fiscalYearRepository;

    protected $inventorySetupRepository;

    public function __construct(FiscalYearRepository $fiscalYearRepository,
                                InventorySetupRepository $inventorySetupRepository)
    {
        $this->fiscalYearRepository= $fiscalYearRepository;
        $this->inventorySetupRepository= $inventorySetupRepository;
    }

    public function fiscalYearInvSetupChecker($currentDate){
        $fiscalYear=$this->fiscalYearRepository->with(['inventorySetups'])->findWhere(['start_date'=>['start_date','<',$currentDate],'end_date'=>['end_date','>',$currentDate]])->first();
     if($fiscalYear == null){
         return null;
     }
     if($fiscalYear->inventorySetups() == null){
         return null;
     }
     return $fiscalYear;
    }
}