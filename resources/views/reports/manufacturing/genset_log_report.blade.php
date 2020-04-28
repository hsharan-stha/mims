<!DOCTYPE html>
<html>
<head>

</head>
<table>
    <tr style="text-align:center;"><td colspan="4" style="font-weight: bold;" rowspan="2">Genset Machine Log Report</td>
        @if($date)<td colspan="3">Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</td>@endif
    </tr>
    <tr style="text-align:center;"><td colspan="4"></td>
        @if($date)<td colspan="3">Date To : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</td>@endif
    </tr>
    <tr style="font-weight: 800;">
        <td>Genset machine</td>
        <td>Date </td>
        <td>Start Time</td>
        <td>End Time</td>
        <td>Run Time (Hr)</td>
        <td>HSD Consumption</td>
        <td>Unit</td>
    </tr>
    <?php $total_run_time=0;$total_hsd_consumed=0;$total_unit_consumed=0;?>
    @foreach($gentsetMachineLogs as $gensetMachineLog)
        <?php $sub_total_run_time=0;$sub_total_hsd_consumed=0;$sub_total_unit_consumed=0;?>
        @foreach($gensetMachineLog as $genset)
            <tr>
                <td>@if($genset->genset){!! $genset->genset->name.'('.$genset->genset->code.')' !!}@endif</td>
                <td>{!! $genset->date !!}</td>
                <td>{!! $genset->start_time !!}</td>
                <td>{!! $genset->stop_time !!}</td>
                <?php $time_difference_in_second = strtotime($genset->stop_time) - strtotime($genset->start_time);
                $time_difference_in_hour = $time_difference_in_second > 0 ? round($time_difference_in_second/(60*60),2): round(($time_difference_in_second+(24*60*60))/(60*60),2);    ?>
                <td>{!! $time_difference_in_hour !!}</td>
                <?php $sub_total_run_time= $sub_total_run_time+$time_difference_in_hour;?>
                <?php $total_run_time= $total_run_time+$time_difference_in_hour;?>
                <td>{!! $genset->hsd_consumption !!}</td>
                <?php $sub_total_hsd_consumed= $sub_total_hsd_consumed+$genset->hsd_consumption;?>
                <?php $total_hsd_consumed= $total_hsd_consumed+$genset->hsd_consumption;?>
                <td>{!! $genset->unit_consumed !!}</td>
                <?php $sub_total_unit_consumed= $sub_total_hsd_consumed+$genset->unit_consumed;?>
                <?php $total_unit_consumed= $total_hsd_consumed+$genset->unit_consumed;?>
            </tr>
        @endforeach
        <tr style="font-weight: bold">
            <td colspan="4">Sub Total</td>
            <td>{!! $sub_total_run_time !!}</td>
            <td>{!! $sub_total_hsd_consumed !!}</td>
            <td>{!! $sub_total_unit_consumed !!}</td>
        </tr>
    @endforeach
    <tr style="background-color: #9d9d9d">
        <td colspan="4">Total</td>
        <td>{!! $total_run_time !!}</td>
        <td>{!! $total_hsd_consumed !!}</td>
        <td>{!! $total_unit_consumed !!}</td>
    </tr>
</table>
</body>
</html>
