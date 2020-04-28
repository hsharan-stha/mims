<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\AccountHeadRepository;
use App\Repositories\AccountTransactionSplitsRepository;
use App\Repositories\FiscalYearRepository;
use App\Repositories\VoucharRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Repositories\AccountTransactionRepository;
use App\Validators\AccountTransactionValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use Excel;
use DB;

class AccountTransactionController extends ApiBaseController
{
    protected $accountTransactionRepository;

    protected $accountTransactionValidator;

    protected $accountTransactionSplitsRepository;

    protected $voucharRepository;

    protected $fiscalYearRepository;


    protected $accountHeadRepository;
    public function __construct(AccountTransactionRepository $accountTransactionRepository,
                                AccountTransactionValidator $accountTransactionValidator,
                                AccountTransactionSplitsRepository $accountTransactionSplitsRepository,
                                VoucharRepository $voucharRepository,
                                FiscalYearRepository $fiscalYearRepository,
                                AccountHeadRepository $accountHeadRepository){
        $this->accountTransactionRepository = $accountTransactionRepository;
        $this->accountTransactionValidator = $accountTransactionValidator;
        $this->accountTransactionSplitsRepository = $accountTransactionSplitsRepository;
        $this->accountHeadRepository = $accountHeadRepository;
        $this->voucharRepository= $voucharRepository;
        $this->fiscalYearRepository= $fiscalYearRepository;

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
//        try{
            $estate_id=1;
            if($request->report == 'true'){
                $limit='all';
                if($request->account_head != null && $request->account_head != ''){
                    $account_head= $request->account_head;
                }else{
                    $account_head= '*';
                }
                if($request->cost_center != null && $request->cost_center != ''){
                    $cost_center= $request->cost_center;
                }else{
                    $cost_center= '*';
                }
                if($request->date_from != null && $request->date_to != null && $request->date_from != '' && $request->date_to != ''){

                    $date=[$request->date_from." 00:00:00",'<>',$request->date_to." 23:59:59"];
                    $date_from= $request->date_from ;
                    $date_to= $request->date_to ;
                }else{
                    $date='*';
                    $date_from= $request->date_from != null ? $request->date_from : date('Y-m-d',strtotime("-1 month"));
                    $date_to= $request->date_to  != null ? $request->date_to : date('Y-m-d');
                }
                if($request->report_type =='ledger') {
                    if($account_head == '*'){
                        return $this->respondWithError("Account Head  Not Provided");
                    }
                    $opening=[];
                    DB::beginTransaction();
                    $opening=DB::select(DB::raw("SELECT GET_OPENING_BAL(:from_date,:ac_code) AS opening,GET_OPENING_BAL(ADDDATE('".$date_to."',1),'".$account_head."') AS closing FROM DUAL"),
                        array(
                            'ac_code'=>$account_head,
                            'from_date'=>$date_from
                        ));
                    $account_transactions=DB::select(DB::raw("SELECT enter_date,CONCAT(vouchar_type,'-',fiscal_year_id,'-',vouchar_no) AS vouchar_no,dr_value,cr_value,particulars,CONCAT(IFNULL(cheque_no,''),' ',IFNULL(bank_name,'')) AS bank_name,GET_COSTCENTER_NAME(cost_center_id) cost_center FROM ps_ac_account_transactions WHERE ac_code = '".$account_head."' AND enter_date BETWEEN '".$date_from."' AND  '".$date_to."' "),
                        array(
//                            'ac_code'=>$account_head,
//                            'from_date'=>$date_from,
//                            'date_to'=>$date_to,
                        ));
                    DB::commit();
                    $data['balance']=$opening;
                    $data['allTransactions'] = $account_transactions;
                    $data['date']['date_from_en'] = $date_from;
                    $data['date']['date_from_np'] = $this->dateConverterEToN($date_from);
                    $data['date']['date_to_en'] = $date_to;
                    $data['date']['date_to_np'] = $this->dateConverterEToN($date_to);
//                    Excel::create('Ledger Report', function ($excel) use ($data) {
//                        $excel->setTitle('Ledger Report');
//                        $excel->setCreator('Phoenix Solutions')
//                            ->setCompany('Phoenix Solutions');
//                        $excel->setDescription('Ledger Report');
//                        $excel->sheet('First sheet', function ($sheet) use ($data) {
//                            $sheet->loadView('reports.account.ledger', $data);
//
//                        });
//
//                    })->export('xlsx');
                    return $this->respondWithMessage('Data Retrieved Successfully', $data);
                }
                elseif($request->report_type == 'trial_balance') {
                    $account_transactions=[];
                    DB::beginTransaction();
                    $level=$request->level == null || $request->level == '' ? 1 : $request->level;
                    $account_transactions=DB::select(DB::raw("SELECT GET_OPENING_BAL('".$date_from."',group_code) AS OPENING,GET_DR_BAL('".$date_from."','".$date_to."',group_code,NULL) DR,GET_CR_BAL('".$date_from."','".$date_to."',group_code,NULL) CR,group_code AC_CODE,`name` AC_HEAD,transact as TR FROM ps_ac_master_account_heads WHERE tr_level <=".$level." AND group_code != '20502' ORDER BY AC_CODE"),
                        array(
//                            'from_date'=>$date_from,
//                            'to_date'=>$date_to,
                        ));
//                    $balance_transactions=DB::select(DB::raw("SELECT GET_OPENING_BAL('".$date_from."',group_code) AS OPENING,GET_DR_BAL('".$date_from."','".$date_to."',group_code,NULL) DR,GET_CR_BAL('".$date_from."','".$date_to."',group_code,NULL) CR,group_code AC_CODE,`name` AC_HEAD FROM ps_ac_master_account_heads WHERE tr_level = 1 ORDER BY AC_CODE"),
//                        array(
////                            'from_date'=>$date_from,
////                            'to_date'=>$date_to,
//                        ));
                    DB::commit();
                    $opening_cr=$opening_dr=$total_cr=$total_dr=$balance_dr=$balance_cr=0;
                    if($account_transactions != null){
                        $asset=(array)$this->searchForAcCode(1,$account_transactions);
                        $liability=(array)$this->searchForAcCode(2,$account_transactions);
                        $income=(array)$this->searchForAcCode(3,$account_transactions);
                        $expense=(array)$this->searchForAcCode(4,$account_transactions);
                        $opening_cr=($asset['OPENING'] < 0 ? $asset['OPENING'] :0 )+($liability['OPENING'] < 0 ? $liability['OPENING']:0 )+($income['OPENING'] < 0 ? $income['OPENING'] : 0)+($expense['OPENING'] < 0 ? $expense['OPENING'] : 0);
                        $opening_dr=($asset['OPENING'] > 0 ? $asset['OPENING'] :0 )+($liability['OPENING'] > 0 ? $liability['OPENING']:0 )+($income['OPENING'] > 0 ? $income['OPENING'] : 0)+($expense['OPENING'] > 0 ? $expense['OPENING'] : 0);
                        $total_cr=$asset['CR']+$liability['CR']+$income['CR']+$expense['CR'];
                        $total_dr=$asset['DR']+$liability['DR']+$income['DR']+$expense['DR'];
                        $balance_cr=$opening_cr+$total_cr;
                        $balance_dr=$opening_dr+$total_dr;
                    }
                    $data['total_balance']['opening_cr']=$opening_cr;
                    $data['total_balance']['opening_dr']=$opening_dr;
                    $data['total_balance']['dr']=$total_dr;
                    $data['total_balance']['cr']=$total_cr;
                    $data['total_balance']['balance_cr']=$balance_cr;
                    $data['total_balance']['balance_dr']=$balance_dr;
                    $data['date']['date_from_en'] = $date_from;
                    $data['date']['date_from_np'] = $this->dateConverterEToN($date_from);
                    $data['date']['date_to_en'] = $date_to;
                    $data['allTransactions']=$account_transactions;
                    $data['date']['date_to_np'] = $this->dateConverterEToN($date_to);
                    return $this->respondWithMessage('Data Retrieved Successfully', $data);
                }
                elseif($request->report_type == 'pl_report'){
                    $account_transactions=[];
                    DB::beginTransaction();
                    $level=$request->level == null || $request->level == '' ? 1 : $request->level;
                    $account_transactions=DB::select(DB::raw("SELECT GET_OPENING_BAL('".$date_from."',group_code) AS OPENING,GET_DR_BAL('".$date_from."','".$date_to."',group_code,NULL) DR,GET_CR_BAL('".$date_from."','".$date_to."',group_code,NULL) CR,group_code AC_CODE,`name` AC_HEAD,transact as TR FROM ps_ac_master_account_heads WHERE (group_code LIKE '3%' OR group_code LIKE '4%') AND tr_level <=".$level." ORDER BY AC_CODE"),
                        array(
//                            'from_date'=>$date_from,
//                            'to_date'=>$date_to,
                        ));
                    DB::commit();
                    $opening_cr=$opening_dr=$total_cr=$total_dr=$balance_dr=$balance_cr=0;
                    if($account_transactions != null){
                        $income=(array)$this->searchForAcCode(3,$account_transactions);
                        $expense=(array)$this->searchForAcCode(4,$account_transactions);
                        $opening_cr=($income['OPENING'] < 0 ? $income['OPENING'] : 0)+($expense['OPENING'] < 0 ? $expense['OPENING'] : 0);
                        $opening_dr=($income['OPENING'] > 0 ? $income['OPENING'] : 0)+($expense['OPENING'] > 0 ? $expense['OPENING'] : 0);
                        $total_cr=$income['CR']+$expense['CR'];
                        $total_dr=$income['DR']+$expense['DR'];
                        $balance_cr=$opening_cr+$total_cr;
                        $balance_dr=$opening_dr+$total_dr;
                    }
                    $data['total_balance']['opening_cr']=$opening_cr;
                    $data['total_balance']['opening_dr']=$opening_dr;
                    $data['total_balance']['dr']=$total_dr;
                    $data['total_balance']['cr']=$total_cr;
                    $data['total_balance']['balance_cr']=$balance_cr;
                    $data['total_balance']['balance_dr']=$balance_dr;
                    $data['pl']['cr']=($total_dr-$total_cr) > 0 ? ($total_dr-$total_cr):0 ;
                    $data['pl']['dr']=($total_dr-$total_cr) < 0 ? ($total_cr-$total_dr):0 ;
                    $data['pl']['balance_dr']=($balance_dr-$balance_cr) < 0 ? ($balance_cr-$balance_dr):0 ;
                    $data['pl']['balance_cr']=($balance_dr-$balance_cr) > 0 ? ($balance_dr-$balance_cr):0 ;
                    $data['grand_total']['dr']=$data['total_balance']['dr']+$data['pl']['dr'];
                    $data['grand_total']['cr']=$data['total_balance']['dr']+$data['pl']['cr'];
                    $data['grand_total']['balance_cr']=$data['total_balance']['balance_cr']+$data['pl']['balance_cr'];
                    $data['grand_total']['balance_dr']=$data['total_balance']['balance_dr']+$data['pl']['balance_dr'];
                    $data['date']['date_from_en'] = $date_from;
                    $data['date']['date_from_np'] = $this->dateConverterEToN($date_from);
                    $data['date']['date_to_en'] = $date_to;
                    $data['allTransactions']=$account_transactions;
                    $data['date']['date_to_np'] = $this->dateConverterEToN($date_to);
                    return $this->respondWithMessage('Data Retrieved Successfully', $data);
                }
                elseif($request->report_type == 'bl_report'){
                    $account_transactions=[];
                    DB::beginTransaction();
                    $level=$request->level == null || $request->level == '' ? 1 : $request->level;
                    $account_transactions=DB::select(DB::raw("SELECT GET_OPENING_BAL('".$date_from."',group_code) AS OPENING,GET_DR_BAL('".$date_from."','".$date_to."',group_code,NULL) DR,GET_CR_BAL('".$date_from."','".$date_to."',group_code,NULL) CR,group_code AC_CODE,`name` AC_HEAD,transact as TR FROM ps_ac_master_account_heads WHERE (group_code LIKE '1%' OR group_code LIKE '2%') AND tr_level <=".$level." ORDER BY AC_CODE"),
                        array(
//                            'from_date'=>$date_from,
//                            'to_date'=>$date_to,
                        ));
                    $pl_transactions=DB::select(DB::raw("SELECT GET_OPENING_BAL('".$date_from."',group_code) AS OPENING,GET_DR_BAL('".$date_from."','".$date_to."',group_code,NULL) DR,GET_CR_BAL('".$date_from."','".$date_to."',group_code,NULL) CR,group_code AC_CODE,`name` AC_HEAD FROM ps_ac_master_account_heads WHERE (group_code LIKE '3%' OR group_code LIKE '4%') AND tr_level = 1 ORDER BY AC_CODE"),
                        array(
//                            'from_date'=>$date_from,
//                            'to_date'=>$date_to,
                        ));
                    DB::commit();
                    $opening_cr=$opening_dr=$total_cr=$total_dr=$balance_dr=$balance_cr=$pl_balance=0;
                    $pl_opening_cr=$pl_opening_dr=$pl_total_cr=$pl_total_dr=$pl_balance_dr=$pl_balance_cr=0;
                    $pl=[];
                    if($account_transactions != null){
                        $asset=(array)$this->searchForAcCode(1,$account_transactions);
                        $liability=(array)$this->searchForAcCode(2,$account_transactions);
                        $pl=$this->searchForAcCode(20502,$account_transactions);
                        $opening_cr=($asset['OPENING'] < 0 ? $asset['OPENING'] :0 )+($liability['OPENING'] < 0 ? $liability['OPENING']:0 );
                        $opening_dr=($asset['OPENING'] > 0 ? $asset['OPENING'] :0 )+($liability['OPENING'] > 0 ? $liability['OPENING']:0 );
                        $total_cr=$asset['CR']+$liability['CR'];
                        $total_dr=$asset['DR']+$liability['DR'];
                        $balance_cr=$opening_cr+$total_cr;
                        $balance_dr=$opening_dr+$total_dr;
                    }
                    if($pl_transactions != null){
                        $income=(array)$this->searchForAcCode(3,$pl_transactions);
                        $expense=(array)$this->searchForAcCode(4,$pl_transactions);
                        $pl_opening_cr=($income['OPENING'] < 0 ? $income['OPENING'] : 0)+($expense['OPENING'] < 0 ? $expense['OPENING'] : 0);
                        $pl_opening_dr=($income['OPENING'] > 0 ? $income['OPENING'] : 0)+($expense['OPENING'] > 0 ? $expense['OPENING'] : 0);
                        $pl_total_cr=$income['CR']+$expense['CR'];
                        $pl_total_dr=$income['DR']+$expense['DR'];
                        $pl_balance_cr=$pl_opening_cr+$pl_total_cr;
                        $pl_balance_dr=$pl_opening_dr+$pl_total_dr;
                        $pl_balance=$pl_balance_dr-$pl_balance_cr;
                    }
                    $data['total_balance']['opening_cr']=$opening_cr;
                    $data['total_balance']['opening_dr']=$opening_dr;
                    $data['total_balance']['dr']=$total_dr;
                    $data['total_balance']['cr']=$total_cr;
                    $data['total_balance']['balance_cr']=$balance_cr;
                    $data['total_balance']['balance_dr']=$balance_dr;
                    $data['pl']['balance_cr']=($balance_dr > $balance_cr) ? abs($pl_balance):0 ;
                    $data['pl']['balance_dr']=($balance_dr < $balance_cr) ? abs($pl_balance):0 ;
                    if($pl != null){

                    }
                    $data['grand_total']['opening_cr']=$opening_cr;
                    $data['grand_total']['opening_dr']=$opening_dr;
                    $data['grand_total']['dr']=$data['total_balance']['dr'];
                    $data['grand_total']['cr']=$data['total_balance']['cr'];
                    $data['grand_total']['balance_cr'] = $data['total_balance']['balance_cr'] + $data['pl']['balance_cr'];
                    $data['grand_total']['balance_dr'] = $data['total_balance']['balance_dr'] + $data['pl']['balance_dr'];
                    $data['date']['date_from_en'] = $date_from;
                    $data['date']['date_from_np'] = $this->dateConverterEToN($date_from);
                    $data['date']['date_to_en'] = $date_to;
                    $data['allTransactions']=$account_transactions;
                    $data['date']['date_to_np'] = $this->dateConverterEToN($date_to);
                    return $this->respondWithMessage('Data Retrieved Successfully', $data);
                }elseif($request->report_type == 'vouchar_report'){
                    if($request->vouchar_no == null || $request->vouchar_no == ''){
                        return $this->respondInternalError("Vouchar No Missing");
                    }else{
                        $vouchar_exploded=explode("-", $request->vouchar_no);
                        $vouchar_no=$vouchar_exploded[2];
                        $fiscal_year_id=$vouchar_exploded[1];
                        $vouchar_type=$vouchar_exploded[0];
                        $data['vouchar_details']=$this->voucharRepository->orderBy('created_at','desc')->with(['voucharDetails','voucharDetails.accountHead','voucharDetails.costCenter'])->findWhere(['vouchar_no'=>$vouchar_no,'vouchar_type'=>$vouchar_type,'fiscal_year_id'=>$fiscal_year_id])->first();
                        return $this->respondWithMessage('Vouchar Detail Retrieved Successfully', $data);
                    }
                }
                else{
                    return $this->respondInternalError("Report type not found");
                }
            }else{

                $limit=$request->limit != null ? $request->limit: 20;
                $type='*';
                if($request->required == 'VOUCHAR_FORM'){
                    if($request->vouchar_type == '' || $request->vouchar_type == null){
                        return $this->respondWithError("Please provide vouchar type");
                    }else{
                        $type=$request->vouchar_type;
                    }
                }
                $allAccountTransactions=$this->voucharRepository->orderBy('created_at','desc')->with(['voucharDetails','voucharDetails.accountHead','voucharDetails.costCenter'])->findWhere(['paginate'=>$limit,'vouchar_type'=>$type,'approve_by'=>['approve_by','=',null],'approve_date'=>['approve_date','=',null]]);
                if($allAccountTransactions->first() == null){
                    return $this->respondNotFound();
                }
                return $this->respondWithMessage('Data Retrieved Successfully', $allAccountTransactions->toArray());
            }
//        }catch(\Exception $e){
//            return $this->respondInternalError();
//        }
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
//        try{
//            try{
                $inputs['user_id']=1;
                $inputs['estate_id']=1;
                $this->accountTransactionValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                    $fiscal_year_id=null;
                    try {
                        $fiscal_year=$this->fiscalYearRepository->findWhere(['start_date' => ['start_date', '<', $request->date], 'end_date' => ['end_date', '>', $request->date]])->first();
                        $fiscal_year_id=$fiscal_year->id;
                    }catch(\Exception $e){
                        return $this->respondWithError("Fiscal Year Missing");
                    }
                    if($fiscal_year_id == null){
                        return $this->respondWithError("Fiscal Year Missing");
                    }
                    $latest_vouchar=$this->voucharRepository->orderBy('vouchar_no','desc')->findWhere(['vouchar_type'=>$request->vouchar_type,'fiscal_year_id'=>$fiscal_year_id])->first();
                    if($latest_vouchar != null) {
                        $inputs['vouchar_no'] = $latest_vouchar->vouchar_no + 1;
                    }else{
                        $inputs['vouchar_no']=1;
                    }
                    $inputs['fiscal_year_id']=$fiscal_year_id;
                    $inputs['enter_date']=$request->date;
                    $vouchar_details=[];
                    if ($request->vouchar_type == 'RV') {
                            $i=$total_value=0;
                            foreach ($request->accountTransactionSplits as $account_transaction_split) {
                                $vouchar_details[$i]['ac_code']=$account_transaction_split['ac_code'];
                                $vouchar_details[$i]['cr_value']=0;
                                $vouchar_details[$i]['dr_value']=$account_transaction_split['value'];
                                $vouchar_details[$i]['cheque_no']=$account_transaction_split['cheque_no'];
                                $vouchar_details[$i]['bank_name']=$account_transaction_split['bank_name'];
                                $vouchar_details[$i]['particulars']=$account_transaction_split['particulars'];
                                $vouchar_details[$i]['cost_center_id']=$account_transaction_split['cost_center_id'];
                                $total_value= $total_value+$account_transaction_split['value'];
                                $i++;
                            }
                            $vouchar_details[$i]['ac_code']=$request->ac_code;
                            $vouchar_details[$i]['dr_value']=0;
                            $vouchar_details[$i]['cr_value']= $total_value;
                            $vouchar_details[$i]['cheque_no']='';
                            $vouchar_details[$i]['bank_name']='';
                            $vouchar_details[$i]['particulars']='';
                            $vouchar_details[$i]['cost_center_id']='';
                            $inputs['total_amount']=$total_value;
                    }elseif($request->vouchar_type == 'PV') {
                        if ($request->accountTransactionSplits) {
                            $i=$total_value=0;
                            foreach ($request->accountTransactionSplits as $account_transaction_split) {
                                $vouchar_details[$i]['ac_code']=$account_transaction_split['ac_code'];
                                $vouchar_details[$i]['dr_value']=0;
                                $vouchar_details[$i]['cr_value']=$account_transaction_split['value'];
                                $vouchar_details[$i]['cheque_no']=$account_transaction_split['cheque_no'];
                                $vouchar_details[$i]['bank_name']=$account_transaction_split['bank_name'];
                                $vouchar_details[$i]['particulars']=$account_transaction_split['particulars'];
                                $vouchar_details[$i]['cost_center_id']=$account_transaction_split['cost_center_id'];
                                $total_value= $total_value+$account_transaction_split['value'];
                                $i++;
                            }
                            $vouchar_details[$i]['ac_code']=$request->ac_code;
                            $vouchar_details[$i]['cr_value']=0;
                            $vouchar_details[$i]['dr_value']= $total_value;
                            $vouchar_details[$i]['cheque_no']='';
                            $vouchar_details[$i]['bank_name']='';
                            $vouchar_details[$i]['particulars']='';
                            $vouchar_details[$i]['reference']='';
                            $vouchar_details[$i]['cost_center_id']='';
                            $inputs['total_amount']=$total_value;
                        }

                    } elseif ($request->vouchar_type == 'JV') {
                        if ($request->accountTransactionSplits) {
                            $i=$cr_value=$dr_value=0;
                            foreach ($request->accountTransactionSplits as $account_transaction_split) {
                                $vouchar_details[$i]['ac_code']=$account_transaction_split['ac_code'];
                                $vouchar_details[$i]['dr_value']=$account_transaction_split['dr_value'];
                                $vouchar_details[$i]['cr_value']=$account_transaction_split['cr_value'];
                                $vouchar_details[$i]['cheque_no']=$account_transaction_split['cheque_no'];
                                $vouchar_details[$i]['bank_name']=$account_transaction_split['bank_name'];
                                $vouchar_details[$i]['particulars']=$account_transaction_split['particulars'];
                               $vouchar_details[$i]['cost_center_id']=$account_transaction_split['cost_center_id'];
                                $cr_value= $cr_value+$account_transaction_split['cr_value'];
                                $dr_value= $dr_value+$account_transaction_split['dr_value'];
                                $i++;
                                $inputs['total_amount']=$cr_value;
                            }
                            if($cr_value != $dr_value){
                                return $this->respondWithError("Credit and Debit side are not equal. Please verify and Resubmit");
                            }
                        }
                    }else {
                        return $this->respondWithError("Vouchar type No found");
                    }
                $request->merge($inputs);
                $accountTransaction = $this->voucharRepository->create($request->all());
                if ($vouchar_details) {
                        foreach ($vouchar_details as $account_transaction_split) {
                            $this->voucharRepository
                                ->with(['voucharDetails'])
                                ->find($accountTransaction->id)
                                ->voucharDetails()
                                ->create($account_transaction_split);
                        }
                }
                    return $this->respondWithMessage('Vouchar added Successfully!!!', $request->all());
//            }catch(ValidatorException $e){
//                return $this->respondWithError($e->getMessageBag());
//            }
//        }catch(\Exception $e){
//            $this->respondWithError($e->getMessage());
//        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            $accountTransaction=$this->accountTransactionRepository->with(['accountTransactionSplits','accountTransactionSplits.accountHead','accountTransactionSplits.costCenter'])->findWhere(['id'=>$id]);
            if($accountTransaction->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $accountTransaction->first());
        }catch(\Exception $e){
            $this->respondWithError($e->getMessage());
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

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
//        try{
//            try{

        if($request->multiple_approve == true || $request->multiple_approve == 'true'){
                    $ids=$request->ids;
                    if($request->approve_date == null || $request->approve_date == ''){
                        return $this->respondWithError("Wrong data format for approval");
                    }else {
                        $i=0;
                        // this part of code is for temporary only by nabin ghimire.
                        DB::beginTransaction();
                        try {
                            $inputs['approve_by']=$request->approve_by;
                            $inputs['approve_date']=$request->approve_date;
                            foreach ($ids as $id) {
                                $this->voucharRepository->update($inputs, $id);
                                $account_transactions=DB::select(DB::raw("UPDATE ps_ac_master_vouchar_details SET `approve_date` = '".$request->approve_date."',`approve_by` = '".$request->approve_by."' WHERE approve_date IS NULL AND vouchar_master_id=".$id));
                                $i++;
                            }
                            DB::commit();
                        }catch(\Exception $e){
                            DB::rollback();
                            return $this->respondWithError("Problem occured while approving.Please try again");
                        }
                        //upto here ......................................
                    }
                    return $this->respondWithMessage($i.' records aproved Successfully', $request->all());
                }else{
//                    $this->accountTransactionValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                    if($request->approve_date == null || $request->approve_date == ''){
                            return $this->respondWithError("Wrong data format for approval");
                        }else {
                            $this->voucharRepository->update($request->all(), $id);
                        }
                        return $this->respondWithMessage('Record Updated Successfully', $request->all());
                }
//            }catch(ValidatorException $e){
//                return $this->respondWithError($e->getMessageBag());
//            }
//        }catch(\Exception $e){
//            return $this->respondInternalError($e->getMessage());
//        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
        $data['id']= $id;
        $this->accountTransactionRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            $this->respondWithError($e->getMessage());
        }
    }

    protected function searchForAcCode($ac_code, $array) {
        foreach ($array as $key => $val) {
            if ($val->AC_CODE == $ac_code) {
                return $val;
            }
        }
        return null;
    }
}
