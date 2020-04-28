<!DOCTYPE html>
<html>
<head>

</head>


<table>
    <thead><tr colspan="10"><th><h1>Daily Factory Kamjari Report</h1>
        </th></tr></thead>
    <thead><tr colspan="10"><th>Date: {!! $date['date_en'] !!}  Miti: {!! $date['date_np'] !!}</th></tr></thead>
    <thead>
    <tr >
        <th rowspan="2">Work Head</th>
        <th style="text-align: center;" colspan="8">Permanent Mandays</th>
        <th style="text-align: center;" colspan="2">BIGHA</th>
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
         <td>{!! $total['tem_total_md'] !!}</td>
         <td>{!! $total['tem_amount'] !!}</td>
         <td>{!! $total['today_total_md'] !!}</td>
         <td>{!! $total['today_amount'] !!}</td>
         <td>{!! $total['todate_total_md'] !!}</td>
         <td>{!! $total['todate_amount'] !!}</td>
     </tr>
     <tr>
         <td colspan="11">Worker PF</td>
         <td colspan="2">{!! $pf_worker['today_amount'] !!}</td>
         <td colspan="2"></td>
     </tr>
     <tr>
         <td colspan="11">Employer PF</td>
         <td colspan="2">{!! $pf_employer['today_amount'] !!}</td>
         <td colspan="2"></td>
     </tr>
     <tr style="font-weight: bold;">
         <td colspan="11"> Net Wages</td>
         <td colspan="2">{!! $total['today_amount']-$pf_worker['today_amount']+$pf_employer['today_amount'] !!}</td>
         <td colspan="2"></td>
     </tr>
     <tr>
         <td colspan="11">Factory Overtime Mandays</td>
         <td colspan="2">{!! $over_time['today_md']/8 !!}</td>
         <td colspan="2"></td>
     </tr>
     <tr>
         <td colspan="11">Factory Overtime Wages</td>
         <td colspan="2">{!! $over_time['today_amount'] !!}</td>
         <td colspan="2"></td>
     </tr>
     <tr>
         <td colspan="11">Factory Permanent Extra Wages</td>
         <td colspan="2">{!! $per_earning['today_amount'] !!}</td>
         <td colspan="2"></td>
     </tr>
     <tr>
         <td colspan="11">Factory Temporary Extra Wages</td>
         <td colspan="2">{!! $tem_earning['today_amount'] !!}</td>
         <td colspan="2"></td>
     </tr>
    <tr>
        <td colspan="11">Net Payable Amount</td>
        <td colspan="2">{!! $total['today_amount']+$over_time['today_amount']+$tem_earning['today_amount']+$per_earning['today_amount']+$pf_employer['today_amount']-$pf_worker['today_amount'] !!}</td>
        <td colspan="2"></td>
    </tr>
     <tr></tr>
     <tr><td style="font-weight: bold;text-align: center;" colspan="6">Overtime Details</td></tr>
     <tr><td style="font-weight: bold" rowspan="2"> Work Head</td><td style="font-weight: bold" colspan="2">Permanent Overtime Details
         </td><td></td><td style="font-weight: bold" colspan="2">Bigha Overtime Details
         </td></tr>
     <tr style="font-weight: bold;"><td></td><td>Overtime (Hrs.)</td><td>Wages</td><td colspan="1"></td><td>Overtime (Hrs.)</td><td>Wages</td></tr>
       <?php $per_md=$per_amount=$tem_md=$tem_amount=0?>
     @foreach($activities as $activity)
         <tr>
             <td>{!! $activity['activity_head'] !!}</td>
             <td>{!! $activity['permanent_overtime']['total_md'] !!}</td>
             <?php $per_md= $per_md+$activity['permanent_overtime']['total_md'];?>
             <td>{!! $activity['permanent_overtime']['amount'] !!}</td>
             <?php $per_amount= $per_amount+$activity['permanent_overtime']['amount'];?>
             <td></td>
             <td>{!! $activity['temporary_overtime']['total_md'] !!}</td>
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
    </tbody>
</table>
</body>
</html>
