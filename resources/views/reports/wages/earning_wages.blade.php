<!DOCTYPE html>
<html>
<head>

</head>
<table>
    <tr colspan="6"><td><h1>Earning Wages</h1>
        </td></tr>
    <tr colspan="6"><td>Date : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</td></tr>
    <tr colspan="6"><td>Date : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</td></tr>
    @foreach($earnings as $earning)
        <tr><th colspan="6" style="background-color: #f7ecb5;"> {!! $earning->name !!}</th></tr>
    <tr>
        <td>S.No.</td>
        <td>Activity Name</td>
        <td>This period Mandays</td>
        <td>To D/T Mandays</td>
        <td>Last Period manydays</td>
        <td>Last D/T manydays</td>
    </tr>

        <?php $activity_id=[];$this_period_total= $todate_this_period_total=$last_period_total=$todate_last_period_total=0;?>
        @foreach($earning->paybooks as $paybook)
            @foreach($paybook->paybookActivities as $activity)
                <?php $this_period= $todate_this_period= $last_period= $todate_last_period=0;?>
                <?php if(!in_array($activity->activity->id,$activity_id )){ ?>
                <?php array_push($activity_id,$activity->activity->id );?>
                    <tr> <td></td>

                <td> {!! $activity->activity->name !!}</td>
                   <td>{!! $this_period=$this_period=$activity->activity->workerAttendences()->whereBetween('date',[ $date['date_from_en']." 00:00:00",$date['date_to_en']." 23:59:59"])->sum('mandays') !!}</td>
                   <td>{!! $todate_this_period=$activity->activity->workerAttendences()->whereBetween('date',[ $date['todate_date_from'],$date['date_to_en']." 23:59:59" ])->sum('mandays') !!}</td>
                   <td>{!! $last_period=$activity->activity->workerAttendences()->whereBetween('date',[ date('Y-m-d',strtotime($date['date_from_en'] . ' -1 year')),date('Y-m-d',strtotime($date['date_to_en'] . ' -1 year'))])->sum('mandays') !!}</td>
                   <td>{!! $todate_last_period=$activity->activity->workerAttendences()->whereBetween('date',[ date('Y-m-d',strtotime($date['todate_date_from'] . ' -1 year')),date('Y-m-d',strtotime($date['date_to_en'] . ' -1 year'))])->sum('mandays') !!}</td>

                   <?php
                       $todate_this_period_total= $todate_this_period_total+$this_period;
                       $todate_last_period_total= $todate_last_period_total+$last_period;
                       $this_period_total= $this_period_total+$this_period;
                       $last_period_total= $last_period_total+$last_period;
                   ?>
               </tr>
                    <?php } ?>
                @endforeach
        @endforeach
        <tr>
            <td colspan="2"> Total</td>
            <td> {!! $this_period_total !!}</td>
            <td > {!! $todate_this_period_total !!}</td>
            <td > {!! $last_period_total !!}</td>
            <td > {!! $todate_last_period_total !!}</td>
        </tr>
    @endforeach

</table>
</body>
</html>
