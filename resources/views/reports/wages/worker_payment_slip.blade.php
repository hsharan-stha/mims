<!DOCTYPE html>
<html>
<head>
</head>
<table>
    <thead><tr colspan="10"><th><h1>Worker Payment Slip</h1>
        </th></tr></thead>
    <thead><tr colspan="10"><th>Date : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
    <thead><tr colspan="10"><th>Date : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>
    <thead><tr>
        <th>S.No.</th>
        <th>Name</th>
        <th>Total Payment</th>
        <th>Total Present Days</th>
        <th>Total Leave Taken</th>
        <th>Total Holidays</th>
        <th>Total Absent Days</th>
        <th>Extra Payment(OT)</th>
        <th>Worker PF Deposit</th>
        <th>Employer PF Deposit</th>
        <th>Total TDS</th>
        <?php
            $earning_count=0;
            foreach($earnings as $earning){
                if($earning->is_pf != 1){
                    $earning_count= $earning_count+1;
                }
            }
            $deduction_count=0;
            foreach($deductions as $deduction){
                if($deduction->is_pf == 0 && $deduction->is_tds ==0){
                    $deduction_count= $deduction_count+1;
                }
            }
        ?>
        <th colspan="{!! $earning_count+1 !!}" style="text-align:center ;">Earnings</th>
        <th colspan="{!! $deduction_count+1 !!}" style="text-align:center ;">Deductions</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        @foreach($earnings as $earning)
            @if($earning->is_pf != 1)
        <th>{!! $earning->name !!}</th>
            @endif
        @endforeach
        <th> Total Earnings</th>
        @foreach($deductions as $deduction)
            @if($deduction->is_pf == 0 && $deduction->is_tds ==0)
        <th>{!! $deduction->name !!}</th>
            @endif
            @endforeach
        <th>Total Deductions</th>
    </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($workerPaymentCollections as $workerPayments)
        <?php $i++;$pf_worker=0;$pf_employer=0;$total_earning_payment =0;$total_deduction_payment=0;?>
        <tr>

        <td>{!! $i !!}</td>
        <td>@if($workerPayments->first())@if($workerPayments->first()->worker){!! $workerPayments->first()->worker->name  !!}@endif @endif</td>
        <td>{!! $workerPayments->sum('total_wages') !!}</td>
        <td>{!! count($workerPayments->where('attendence_status','P'))!!}</td>
        <td>{!! count($workerPayments->where('attendence_status','L')) !!}</td>
        <td>{!! count($workerPayments->where('attendence_status','H')) !!}</td>
        <td>{!! count($workerPayments->where('attendence_status','A')) !!}</td>
                <td>{!! $workerPayments->sum('ot_wages') !!}</td>

            @foreach($workerPayments as $workerPayment)
                @if($workerPayment->workerPFDeposits != '')
                    <?php
                    $pf_worker = $pf_worker+$workerPayment->workerPFDeposits->pf_worker;
                    $pf_employer= $pf_employer+ $workerPayment->workerPFDeposits->pf_employer;
                    ?>
                    @endif
            @endforeach
        <td>{!! $pf_worker !!}</td>
        <td>{!! $pf_employer !!}</td>
            <td>{!! 0 !!}</td>
            <?php foreach($earnings as $earning){
                if($earning->is_pf == 0 ){
                $earning_payment=0;
                 foreach($workerPayments as $workerPayment){
                        if($earningLog=$workerPayment->workerDailyEarningLogs()->where('earning_id',$earning->id)->first()){
                                $earning_payment=$earning_payment+$earningLog->amount;
                            }
                         $total_earning_payment= $total_earning_payment+$earning_payment;
                            } ?>
                        <td>
                        {!! $earning_payment !!}
                        </td>
                <?php }
                    } ?>


        <td>{!! $total_earning_payment !!}</td>
            @foreach($deductions as $deduction)
                    @if($deduction->is_pf == 0 && $deduction->is_tds == 0 )
                    <?php $deduction_payment=0;?>
                    @foreach($workerPayments as $workerPayment)
                        @if($deductionLog=$workerPayment->workerDailydeductionLogs()->where('deduction_id',$deduction->id)->first())
                        <?php $deduction_payment=$deduction_payment+$deductionLog->amount;?>
                        @endif
                    @endforeach
                        <td>
                        {!! $deduction_payment !!}
                        </td>
                        <?php $total_deduction_payment= $total_deduction_payment+ $deduction_payment;?>
                    @endif
            @endforeach
        <td>{!! $total_deduction_payment !!}</td>
    </tr>
    @endforeach

    </tbody>
</table>
</body>
</html>
