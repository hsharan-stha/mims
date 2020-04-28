<!DOCTYPE html>
<html>
<head>

</head>
<body>
<table>
    <thead><tr colspan="10"><th style="text-align: center;font-size: 16;border-bottom: 1px solid #000;">Wages Payment Sheet</th></tr></thead>
    @if($date)
        <thead><tr ><th colspan="10">Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
        <thead><tr ><th colspan="10">Date To : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>
    @endif
    <tr style="border-top: 1px solid #000;font-weight: bold;">
        <td rowspan="2" style="text-align:center;border-bottom: 1px solid #000;font-size: 14;">{!! 'Particulars' !!}</td>
        <td colspan="2">{!! 'This Period' !!}</td>
        <td colspan="2">{!! 'To D/T' !!}</td>
        <td colspan="2">{!! 'Last Period' !!}</td>
        <td colspan="2">{!! 'Last Year DT' !!}</td>
    </tr>
    <tr style="border-bottom: 1px solid #000;">
        <td></td>
        <td>Mandays</td>
        <td>Amount</td>
        <td>Mandays</td>
        <td>Amount</td>
        <td>Mandays</td>
        <td>Amount</td>
        <td>Mandays</td>
        <td>Amount</td>
    </tr>
    @foreach($wages as $key=>$wage)
        <tr>
            <td>{!! $wage['name'] !!}</td>
            <td>{!! $wage['current_period']['mandays'] !!}</td>
            <td>{!! $wage['current_period']['amount'] !!}</td>
            <td>{!! $wage['current_todate']['mandays'] !!}</td>
            <td>{!! $wage['current_todate']['amount'] !!}</td>
            <td>{!! $wage['last_period']['mandays'] !!}</td>
            <td>{!! $wage['last_period']['amount'] !!}</td>
            <td>{!! $wage['last_todate']['mandays'] !!}</td>
            <td>{!! $wage['last_todate']['amount'] !!}</td>
        </tr>
    @endforeach
    <tr>
        <td>Task Deduction</td>
        <td></td>
        <td>{!! $task_deduction['current_period']['amount'] !!}</td>
        <td></td>
        <td>{!! $task_deduction['current_todate']['amount'] !!}</td>
        <td></td>
        <td>{!! $task_deduction['last_period']['amount'] !!}</td>
        <td></td>
        <td>{!! $task_deduction['last_todate']['amount'] !!}</td>
    </tr>
    <tr style="font-weight: bold;text-align: center;border-top: 3px solid #000;">
        <td>Total Mandays</td>
        <td>{!! $total_mandays['current_period']['mandays'] !!}</td>
        <td>{!! $total_mandays['current_period']['amount'] !!}</td>
        <td>{!! $total_mandays['current_todate']['mandays'] !!}</td>
        <td>{!! $total_mandays['current_todate']['amount'] !!}</td>
        <td>{!! $total_mandays['last_period']['mandays'] !!}</td>
        <td>{!! $total_mandays['last_period']['amount'] !!}</td>
        <td>{!! $total_mandays['last_todate']['mandays'] !!}</td>
        <td>{!! $total_mandays['last_todate']['amount'] !!}</td>
    </tr>



    @if($cash_plucking_hand)
        @foreach($cash_plucking_hand as $key=>$plucking)
            <tr style="border-top: 3px solid #000;">
                <td>{!! $key !!}</td>
                <td>{!! $plucking['current_period']['mandays'] !!}</td>
                <td>{!! $plucking['current_period']['amount'] !!}</td>
                <td>{!! $plucking['current_todate']['mandays'] !!}</td>
                <td>{!! $plucking['current_todate']['amount'] !!}</td>
                <td>{!! $plucking['last_period']['mandays'] !!}</td>
                <td>{!! $plucking['last_period']['amount'] !!}</td>
                <td>{!! $plucking['last_todate']['mandays'] !!}</td>
                <td>{!! $plucking['last_todate']['amount'] !!}</td>
            </tr>
        @endforeach
    @endif
    @if($cash_plucking_machine)
        @foreach($cash_plucking_machine as $key=>$plucking)
            <tr>
                <td>{!! $key !!}</td>
                <td>{!! $plucking['current_period']['mandays'] !!}</td>
                <td>{!! $plucking['current_period']['amount'] !!}</td>
                <td>{!! $plucking['current_todate']['mandays'] !!}</td>
                <td>{!! $plucking['current_todate']['amount'] !!}</td>
                <td>{!! $plucking['last_period']['mandays'] !!}</td>
                <td>{!! $plucking['last_period']['amount'] !!}</td>
                <td>{!! $plucking['last_todate']['mandays'] !!}</td>
                <td>{!! $plucking['last_todate']['amount'] !!}</td>
            </tr>
        @endforeach
    @endif

    @if($hand_plucking)
        @foreach($hand_plucking as $key=>$plucking)
            <tr>
                <td>{!! $key.'(ELP)' !!}</td>
                <td>{!! $plucking['current_period']['mandays'] !!}</td>
                <td>{!! $plucking['current_period']['amount'] !!}</td>
                <td>{!! $plucking['current_todate']['mandays'] !!}</td>
                <td>{!! $plucking['current_todate']['amount'] !!}</td>
                <td>{!! $plucking['last_period']['mandays'] !!}</td>
                <td>{!! $plucking['last_period']['amount'] !!}</td>
                <td>{!! $plucking['last_todate']['mandays'] !!}</td>
                <td>{!! $plucking['last_todate']['amount'] !!}</td>
            </tr>
        @endforeach
    @endif
    @if($machine_plucking)
        @foreach($machine_plucking as $key=>$plucking)
            <tr style="border-bottom: 3px solid #000;">
                <td>{!! $key.'(ELP)' !!}</td>
                <td>{!! $plucking['current_period']['mandays'] !!}</td>
                <td>{!! $plucking['current_period']['amount'] !!}</td>
                <td>{!! $plucking['current_todate']['mandays'] !!}</td>
                <td>{!! $plucking['current_todate']['amount'] !!}</td>
                <td>{!! $plucking['last_period']['mandays'] !!}</td>
                <td>{!! $plucking['last_period']['amount'] !!}</td>
                <td>{!! $plucking['last_todate']['mandays'] !!}</td>
                <td>{!! $plucking['last_todate']['amount'] !!}</td>
            </tr>
        @endforeach
    @endif
    <tr>
        <td>OT/Extra Time</td>
        <td></td>
        <td>{!! $ot_wages['current_period']['amount'] !!}</td>
        <td></td>
        <td>{!! $ot_wages['current_todate']['amount'] !!}</td>
        <td></td>
        <td>{!! $ot_wages['last_period']['amount'] !!}</td>
        <td></td>
        <td>{!!  $ot_wages['last_todate']['amount'] !!}</td>
    </tr>
    <?php $total_earning=0;?>

    @foreach($earnings['current']['todate'] as $key=>$earning)
        <tr style="background-color: #F8F9F9;border: 1px solid #CCD1D1">
            <td>@if($earning->first()->earning){!! $earning->first()->earning->name !!}@endif</td>
            <td></td>
            <td>@if(array_key_exists($key,$earnings['current']['period'])){!! $ecp=$earnings['current']['period'][$key]->sum('amount')!!} @else {!! $ecp=0 !!} @endif </td>
            <?php $total['current_period']['total']=$total['current_period']['total']+$ecp;?>
            <td></td>
            <td>{!! $earning->sum('amount') !!}</td>
            <?php $total['current_todate']['total']=$total['current_todate']['total']+$earning->sum('amount');?>
            <td></td>
            <td>@if(array_key_exists($key,$earnings['last']['period'])){!! $elp=$earnings['last']['period'][$key]->sum('amount') !!}@else {!! $elp=0 !!} @endif</td>
            <?php $total['last_period']['total']=$total['last_period']['total']+$elp;?>
            <td></td>
            <td>@if(array_key_exists($key,$earnings['last']['todate'])){!! $elt=$earnings['last']['todate'][$key]->sum('amount') !!} @else {!! $elt=0 !!} @endif</td>
            <?php $total['last_todate']['total']=$total['last_todate']['total']+$elt;?>
        </tr>
    @endforeach
    @foreach($deductions['current']['todate'] as $key=>$deduction)
        <tr style="background-color: #E5E8E8;border: 1px solid #CCD1D1;">
            <td>@if($deduction->first()->$deduction){!! $deduction->first()->deduction->name !!}@endif</td>
            <td></td>
            <td>@if(array_key_exists($key,$deductions['current']['period'])){!! $dcp=$deductions['current']['period'][$key]->sum('amount') !!}@else{!! $dcp=0 !!} @endif</td>
            <?php $total['current_period']['total']=$total['current_period']['total']-$dcp;?>
            <td></td>
            <td>{!! $deduction->sum('amount') !!}</td>
            <?php $total['current_todate']['total']=$total['current_todate']['total']-$deduction->sum('amount');?>
            <td></td>
            <td>@if(array_key_exists($key,$deductions['last']['period'])){!! $dlp=$deductions['last']['period'][$key]->sum('amount') !!}@else{!! $dlp=0 !!} @endif</td>
            <?php $total['last_period']['total']=$total['last_period']['total']-$dlp;?>
            <td></td>
            <td>@if(array_key_exists($key,$deductions['last']['todate'])){!! $dlt=$deductions['last']['todate'][$key]->sum('amount') !!}@else {!! $dlt=0 !!}@endif</td>
            <?php $total['last_period']['total']=$total['last_period']['total']-$dlt;?>
        </tr>
    @endforeach

    <tr style="border-top: 1px solid #000; font-weight: bold;text-align: center;">
        <td>Total</td>
        <td>{!! 'XXX' !!}</td>
        <td>{!! $tcpt=$total['current_period']['total'] !!}</td>
        <td>{!! 'XXX' !!}</td>
        <td>{!! $tctt=$total['current_todate']['total'] !!}</td>
        <td>{!! 'XXX' !!}</td>
        <td>{!! $tlpt=$total['last_period']['total'] !!}</td>
        <td>{!! 'XXX' !!}</td>
        <td>{!! $tltt=$total['last_todate']['total'] !!}</td>
    </tr>

    <tr style="border-top: 1px solid #000;background-color: #F8F9F9;">
        <td>PF Worker</td>
        <td></td>
        <td>{!! $pf_deposits['current']['pf_worker_period'] !!}</td>
        <td></td>
        <td>{!! $pf_deposits['current']['pf_worker_todate'] !!}</td>
        <td></td>
        <td>{!! $pf_deposits['last']['pf_worker_period'] !!}</td>
        <td></td>
        <td>{!! $pf_deposits['last']['pf_worker_todate'] !!}</td>
    </tr>
    <tr style="background-color: #F8F9F9;">
        <td>PF Employer</td>
        <td></td>
        <td>{!! $pf_deposits['current']['pf_employer_period'] !!}</td>
        <td></td>
        <td>{!! $pf_deposits['current']['pf_employer_todate'] !!}</td>
        <td></td>
        <td>{!! $pf_deposits['last']['pf_employer_period'] !!}</td>
        <td></td>
        <td>{!! $pf_deposits['last']['pf_employer_todate'] !!}</td>
    </tr>
    <tr style="border-top: 1px solid #000;border-bottom: 1px solid #000;font-weight: bold;text-align: center;">
        <td>Total Cost to Company</td>
        <td>{!! 'XXX' !!}</td>
        <td>{!! $tcccp=$tcpt+$pf_deposits['current']['pf_employer_period']-$pf_deposits['current']['pf_worker_period'] !!}</td>
        <td>{!! 'XXX' !!}</td>
        <td>{!! $tccct=$tctt+$pf_deposits['current']['pf_employer_todate']-$pf_deposits['current']['pf_worker_todate'] !!}</td>
        <td>{!! 'XXX' !!}</td>
        <td>{!! $tcclp=$tlpt+$pf_deposits['last']['pf_employer_period']-$pf_deposits['last']['pf_worker_period'] !!}</td>
        <td>{!! 'XXX' !!}</td>
        <td>{!! $tcclt=$tltt+$pf_deposits['last']['pf_employer_todate']-$pf_deposits['last']['pf_worker_todate'] !!}</td>
    </tr>
    <tr style="background-color: #F8F9F9;">
        <td> Total TDS </td>
        <td></td>
        <td>{!! $tdscp=round($tcccp*0.01,2) !!}</td>
        <td></td>
        <td>{!! $tdsct=round($tccct*0.01,2) !!}</td>
        <td></td>
        <td>{!! $tdslp=round($tcclp*0.01,2) !!}</td>
        <td></td>
        <td>{!! $tdslt=round($tcclt*0.01,2) !!}</td>
    </tr>
    <tr style="border-top: 1px solid #000;border-bottom: 1px solid #000;font-weight: bold;text-align: center;">
        <td>Net to Pay</td>
        <td>{!! 'XXX' !!}</td>
        <td>{!! $tcccp-$tdscp !!}</td>
        <td>{!! 'XXX' !!}</td>
        <td>{!! $tccct-$tdsct !!}</td>
        <td>{!! 'XXX' !!}</td>
        <td>{!! $tcclp-$tdslp !!}</td>
        <td>{!! 'XXX' !!}</td>
        <td>{!! $tcclt-$tdslt !!}</td>
    </tr>
</table>
</body>
</html>
