<!DOCTYPE html>
<html>
<head>

</head>


<table>
    <thead><tr colspan="10"><th><h1>Daily Garden Kamjari Report</h1>
        </th></tr></thead>
    <thead><tr colspan="10"><th>Date: {!! $date['date_en'] !!}  Miti: {!! $date['date_np'] !!}</th></tr></thead>
    <thead>
    <tr >
        <th rowspan="2">Work Head</th>
        <th style="text-align: center;" colspan="8">Permanent Mandays</th>
        <th style="text-align: center;" colspan="5">BIGHA</th>
        <th style="text-align: center;" colspan="2">TOTAL TODAY</th>
        <th style="text-align: center;" colspan="2">TODATE</th>
    </tr>
    <tr >
        <th></th>
        <th>PF Male</th>
        <th>NO PF Male</th>
        <th>PF Female</th>
        <th>NO PF Female</th>
        <th>PF Ado.</th>
        <th>NO PF Ado.</th>
        <th>Total Md.</th>
        <th>Amount</th>
        <th>Male</th>
        <th>Female</th>
        <th>Ado.</th>
        <th>Mandays</th>
        <th>Amount</th>
        <th>Mandays</th>
        <th>Amount</th>
        <th>Mandays</th>
        <th>Amount</th>
    </tr></thead>
    <tbody>
    @foreach($activities as $activity)
        <tr>
            <td>{!! $activity['activity_head'] !!}</td>
            <td>{!! $activity['permanent']['pf_male_md'] !!}</td>
            <td>{!! $activity['permanent']['no_pf_male_md'] !!}</td>
            <td>{!! $activity['permanent']['pf_female_md'] !!}</td>
            <td>{!! $activity['permanent']['no_pf_female_md'] !!}</td>
            <td>{!! $activity['permanent']['pf_ado_md'] !!}</td>
            <td>{!! $activity['permanent']['no_pf_ado_md'] !!}</td>
            <td>{!! $activity['permanent']['total_md'] !!}</td>
            <td>{!! $activity['permanent']['amount'] !!}</td>
            <td>{!! $activity['temporary']['male_md'] !!}</td>
            <td>{!! $activity['temporary']['female_md'] !!}</td>
            <td>{!! $activity['temporary']['ado_md'] !!}</td>
            <td>{!! $activity['temporary']['total_md'] !!}</td>
            <td>{!! $activity['temporary']['amount'] !!}</td>
            <td>{!! $activity['today']['total_md'] !!}</td>
            <td>{!! $activity['today']['amount'] !!}</td>
            <td>{!! $activity['todate']['total_md'] !!}</td>
            <td>{!! $activity['todate']['amount'] !!}</td>
        </tr>
    @endforeach
    <tr style="font-weight: bold">
        <td>Total</td>
        <td>{!! $total['per_pf_male_md'] !!}</td>
        <td>{!! $total['per_no_pf_male_md'] !!}</td>
        <td>{!! $total['per_pf_female_md'] !!}</td>
        <td>{!! $total['per_no_pf_female_md'] !!}</td>
        <td>{!! $total['per_pf_ado_md'] !!}</td>
        <td>{!! $total['per_no_pf_ado_md'] !!}</td>
        <td>{!! $total['per_total_md'] !!}</td>
        <td>{!! $total['per_amount'] !!}</td>
        <td>{!! $total['tem_male_md'] !!}</td>
        <td>{!! $total['tem_female_md'] !!}</td>
        <td>{!! $total['tem_ado_md'] !!}</td>
        <td>{!! $total['tem_total_md'] !!}</td>
        <td>{!! $total['tem_amount'] !!}</td>
        <td>{!! $total['today_total_md'] !!}</td>
        <td>{!! $total['today_amount'] !!}</td>
        <td>{!! $total['todate_total_md'] !!}</td>
        <td>{!! $total['todate_amount'] !!}</td>
    </tr>
    <tr>
        <td colspan="8">Worker PF</td>
        <td colspan="2">{!! $pf_worker['today_amount'] !!}</td>
        <td colspan="2"></td>
    </tr>
    <tr>
        <td colspan="8">Employer PF</td>
        <td colspan="2">{!! $pf_employer['today_amount'] !!}</td>
        <td colspan="2"></td>
    </tr>
    <tr style="font-weight: bold;">
        <td colspan="8"> Net Wages</td>
        <td colspan="2">{!! $total['today_amount']-$pf_worker['today_amount']+$pf_employer['today_amount'] !!}</td>
        <td colspan="2"></td>
    </tr>
    @if($extra_leaf)
    @foreach($extra_leaf as $key=>$elp)
    <tr style="font-weight: bold;">
        <td colspan="8"> {!! 'ELP- '.$key !!} </td>
        <td colspan="1">{!! $elp['amount'].'kg' !!}</td>
        <td colspan="1">{!! $elp['price'] !!}</td>
        <td colspan="2"></td>
    </tr>
    @endforeach
    @endif
    <?php $total_earning=0;?>
    @foreach($extraEarnings as $earning)
        <tr>
            <td colspan="8">@if($earning[0]->earning){!! $earning[0]->earning->name !!}@endif</td>
            <td colspan="2">{!! $earning->sum('amount') !!}</td>
            <?php $total_earning= $total_earning+$earning->sum('amount');?>
            <td colspan="2"></td>
        </tr>
        @endforeach
    <tr>
        <td colspan="8">Cash Plucking Leaf (Hand)</td>
        <td>{!! $chp_leaf['today'].'(Kg)' !!}</td>
        <td>{!! $chp_wages['today'] !!}</td>
        <td colspan="2"></td>
    </tr>
    <tr>
        <td colspan="8">Cash Plucking Leaf (Machine)</td>
        <td>{!! $cmp_leaf['today'].'(Kg)' !!}</td>
        <td>{!! $cmp_wages['today'] !!}</td>
        <td colspan="2"></td>
    </tr>
    <tr>
        <td colspan="8">Net Payable Amount</td>
        <td colspan="2">{!! $total['today_amount']+array_sum(array_column($extra_leaf,'price'))+$over_time['today_amount']+$tem_earning['today_amount']+$per_earning['today_amount']+$pf_employer['today_amount']-$pf_worker['today_amount']+$total_earning !!}</td>
        <td colspan="2"></td>
    </tr>
    <tr></tr>
    <tr><td style="font-weight: bold;text-align: center;" colspan="6">Overtime Details</td></tr>
    <tr><td style="font-weight: bold" rowspan="2"> Work Head</td><td style="font-weight: bold" colspan="2">Permanent Overtime Details
        </td><td></td><td style="font-weight: bold" colspan="2">Bigha Overtime Details
        </td></tr>
    <tr style="font-weight: bold;"><td></td><td>Overtime</td><td>Wages</td><td colspan="1"></td><td>Overtime</td><td>Wages</td></tr>
    <?php $per_md=$per_amount=$tem_md=$tem_amount=0?>
    @foreach($activities as $activity)
        <tr>
            <td>{!! $activity['activity_head'] !!}</td>
            <td>{!! $activity['permanent_overtime']['total_md'].' ('. $activity['permanent_overtime']['unit_of_task'].')' !!}</td>
            <?php $per_md= $per_md+$activity['permanent_overtime']['total_md'];?>
            <td>{!! $activity['permanent_overtime']['amount'] !!}</td>
            <?php $per_amount= $per_amount+$activity['permanent_overtime']['amount'];?>
            <td></td>
            <td>{!! $activity['temporary_overtime']['total_md'].' ('. $activity['temporary_overtime']['unit_of_task'].')' !!}</td>
            <?php $tem_md= $tem_md+$activity['temporary_overtime']['total_md'];?>
            <td>{!! $activity['temporary_overtime']['amount'] !!}</td>
            <?php $tem_amount= $tem_amount+$activity['temporary_overtime']['amount'];?>
        </tr>
    @endforeach
    <tr style="font-weight: bold;">
        <td>Total</td>
        <td>{!! $per_md !!}</td>
        <td>{!! $per_amount !!}</td>
        <td></td>
        <td>{!! $tem_md !!}</td>
        <td>{!! $tem_amount !!}</td>
    </tr>
    <tr></tr>
    @if($elp_details)
        <tr><td colspan="3" style="background-color: #9d9d9d;">Extra Leaf Plucked Details</td></tr>
        <tr style="font-weight: bold;"><td>Particulars</td><td>OT (Kg)</td><td>Amount</td></tr>
        <tr><td>Hand Plucking (Temporary)</td><td>{!! $elp_details['hand_plucking']['temporary_ot'] !!}</td><td>{!! $elp_details['hand_plucking']['temporary_wages'] !!}</td></tr>
        <tr><td>Hand Plucking(Permanent)</td><td>{!! $elp_details['hand_plucking']['permanent_ot'] !!}</td><td>{!! $elp_details['hand_plucking']['permanent_wages'] !!}</td></tr>
        <tr><td>Machine Plucking (Temporary)</td><td>{!! $elp_details['machine_plucking']['temporary_ot'] !!}</td><td>{!! $elp_details['machine_plucking']['temporary_wages'] !!}</td></tr>
        <tr><td>Machine Plucking (Permanent)</td><td>{!! $elp_details['machine_plucking']['permanent_ot'] !!}</td><td>{!! $elp_details['machine_plucking']['permanent_wages'] !!}</td></tr>
        <tr style="font-weight: bold;"><td>Total</td>{!! $elp_total_ot !!}<td></td>{!! $elp_total_wages !!}<td></td></tr>
    @endif
    <tr></tr>
    <tr style="background-color: #9d9d9d;font-weight: bold;"><td>G/Leaf Plucked KGs</td><td>Today</td></tr>
    <tr><td>Permanent Leaf</td><td>{!! $gl_permanent['today'] !!}</td></tr>
    <tr><td>Bigha Leaf</td><td>{!! $gl_temporary['today'] !!}</td></tr>
    <tr><td>Hand Plucking</td><td>{!! $gl_hand['today'] !!}</td></tr>
    <tr><td>Machine Plucking</td><td>{!! $gl_machine['today'] !!}</td></tr>
    </tbody>
</table>
</body>
</html>
