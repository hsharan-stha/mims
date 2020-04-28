<!DOCTYPE html>
<html>
<head>

</head>
<table>
    <tr><td colspan="5" style="font-weight: bold;text-align:center;" rowspan="2">CTC Machine Log Report</td>
        @if($date)<td colspan="2">Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</td>@endif
    </tr>
    <tr><td colspan="5"></td>
        @if($date)<td colspan="2">Date To : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</td>@endif
    </tr>
    <tr style="font-weight: 800;">
        <td>CTC machine No</td>
        <td>Date </td>
        <td>Start Time</td>
        <td>End Time</td>
        <td>Run Time (Hr)</td>
        <td>Output Per Hour</td>
        <td>Run Hr After Roller Change(Hr)</td>
    </tr>
    <?php $total_run_time=0;$total_rate_per_hour=0;?>
    @foreach($ctcMachineLogs as $ctcMachineLog)
        <?php $sub_total_run_time=0;$sub_total_rate_per_hour=0;?>
        @foreach($ctcMachineLog as $ctcLog)
        <tr>
            <td>@if($ctcLog->ctcMachine){!! $ctcLog->ctcMachine->name.'('.$ctcLog->ctcMachine->code.')' !!}@endif</td>
            <td>{!! $ctcLog->date !!}</td>
            <td>{!! $ctcLog->start_time !!}</td>
            <td>{!! $ctcLog->stop_time !!}</td>
            <?php $time_difference_in_second = strtotime($ctcLog->stop_time) - strtotime($ctcLog->start_time);
            $time_difference_in_hour = $time_difference_in_second > 0 ? round($time_difference_in_second/(60*60),2): round(($time_difference_in_second+(24*60*60))/(60*60),2);    ?>
            <td>{!! $time_difference_in_hour !!}</td>
            <?php $sub_total_run_time= $sub_total_run_time+$time_difference_in_hour;?>
            <?php $total_run_time= $total_run_time+$time_difference_in_hour;?>
            <td>{!! $ctcLog->output_per_hour !!}</td>
            <?php $sub_total_rate_per_hour= $sub_total_rate_per_hour+$ctcLog->output_per_hour;?>
            <?php $total_rate_per_hour= $total_rate_per_hour+$ctcLog->output_per_hour;?>
            <?php ?>
            <td>{!! $ctcLog->run_hour_after_roller_change !!}</td>
        </tr>
        @endforeach
            <tr style="font-weight: bold">
                <td colspan="4">Sub Total</td>
                <td>{!! $sub_total_run_time !!}</td>
                <td>@if($sub_total_run_time !=0){!! $sub_total_rate_per_hour/$sub_total_run_time !!}@endif</td>
                <td></td>
            </tr>
    @endforeach
    <tr style="background-color: #9d9d9d">
        <td colspan="4">Total</td>
        <td>{!! $total_run_time !!}</td>
        <td>@if($total_run_time !=0){!! $total_rate_per_hour/$total_run_time !!}@endif</td>
        <td></td>
    </tr>
</table>
</body>
</html>
