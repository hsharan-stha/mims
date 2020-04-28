<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="10">
        <th><h1>Dryer Log Report </h1></th>
    </tr>
    </thead>
    <thead><tr ><th colspan="10">Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
    <thead><tr ><th colspan="10">Date To : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>
    <tbody>
    <tr>
        <th>Date</th>
        <th>Dryer No</th>
        <th>GL Processed</th>
        <th>Time In</th>
        <th>Time Out</th>
        <th>Process Time</th>
        <th>Withering %</th>
        <th>DMT</th>
        <th>Recovery %</th>
        <th>Production/Hr</th>
    </tr>
    @if($allProcesses)
<?php $total_pph=$total_gl_leaf=$total_made_tea=$total_process_time=$total_recovery_percentage=0;$total_withering_percentage=0;?>
<?php $i=0;?>
@foreach($allProcesses as $teaMadeProcess)

        @if($teaMadeProcess->dryerDailyLogs != null)

        @foreach($teaMadeProcess->dryerDailyLogs as $dryerLog)
            <tr>
            <td>{!! date('Y-m-d',strtotime($teaMadeProcess->date)) !!}</td>
            <td>@if($dryerLog->dryer){!! $dryerLog->dryer->dryer_no !!}@endif</td>
            <td>{!! $dryerLog->green_leaf !!}</td>
                <?php $total_gl_leaf=$total_gl_leaf+$dryerLog->green_leaf;?>
            <td>{!! $dryerLog->time_in !!}</td>
            <td>{!! $dryerLog->time_out !!}</td>
            <?php $time_difference_in_second = strtotime($dryerLog->time_out) - strtotime($dryerLog->time_in);
                   $time_difference_in_hour = $time_difference_in_second > 0 ? round($time_difference_in_second/(60*60),2): round(($time_difference_in_second+(24*60*60))/(60*60),2);    ?>
            <td>{!! $time_difference_in_hour .'hr' !!}</td>
                <?php $total_process_time=$total_process_time+$time_difference_in_hour;?>
            <td>{!! $dryerLog->withering_percentage !!}</td>
                <?php $total_withering_percentage= $total_withering_percentage+$dryerLog->witherring_percenatge?>
            <td>{!! $dryerLog->made_tea !!}</td>
                <?php $total_made_tea= $total_made_tea+$dryerLog->made_tea;?>
            <td>{!! $dryerLog->recovery_percentage !!}</td>
                <?php $total_recovery_percentage= $total_recovery_percentage+$dryerLog->recovery_percentage;?>
            @if($time_difference_in_hour !=0)<td>{!! round($dryerLog->made_tea/$time_difference_in_hour,2) !!}</td>
                <?php $total_pph=$total_pph+round($dryerLog->made_tea/$time_difference_in_hour,2)?>
                @else<td>{!! '0' !!}</td>@endif
                <?php $i++;?>
            </tr>
        @endforeach
        @endif
        @endforeach
        @endif
    @if($i > 0)
    <tr style="font-weight: bold;border-bottom: 1px solid #000;border-top: 1px solid #000;">
        <td>Total</td>
        <td></td>
        <td>{!! $total_gl_leaf !!}</td>
        <td></td>
        <td></td>
        <td>{!! $total_process_time !!}</td>
        <td>{!! round($total_withering_percentage/$i,2) !!}</td>
        <td>{!! $total_made_tea !!}</td>
        <td>{!! round($total_recovery_percentage/$i,2) !!}</td>
        <td>{!! round($total_pph/$i,2) !!}</td>
    </tr>
        @endif
    </tbody>
</table>
</body>
</html>
