<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="10">
        <th><h1>Irrigation Activity Report</h1></th>
    </tr>
    </thead>
    <thead><tr ><th colspan="10">Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
    <thead><tr ><th colspan="10">Date To : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>
    <tbody>
    <tr style="font-weight: bold;text-align: center;">
        <td>Unit Name</td>
        <td>Date</td>
        <td>Section Name</td>
        <td>No of Setting</td>
        <td>Run Hr of Set</td>
        <td>Not of Sprinkler</td>
        <td>Rain Received</td>
        <td>Area per Setting</td>
        <td>Area Covered</td>
        <td>Area Covered Todate</td>
        <td>Round</td>
        <td>Mandays</td>
        <td>Mandays Todate</td>
    </tr>
    <?php $round=$rain_received=0;?>
    @foreach($units as $key=>$unit_activity)
        @foreach($unit_activity as $unit)
        <tr>
            <td>{!! $key !!}</td>
            <td>{!! $unit->date !!}</td>
            <td>{!! $unit->section->name !!}</td>
            <td>{!! $unit->no_of_setting !!}</td>
            <td>{!! $unit->running_hours_of_setting !!}</td>
            <td>{!! $unit->no_of_sprinkler !!}</td>
            <?php $rain_received= $rain_received+$unit->rain_received;?>
            <td>{!! $unit->rain_received !!}</td>
            <td>{!! $unit->area_per_setting !!}</td>
            <td>{!! $unit->area_covered_today !!}</td>
            <td>{!! $unit->area_covered_todate !!}</td>
            <td>{!! $unit->round !!}</td>
            <?php $round= $round+$unit->round;?>
            <td>{!! $unit->mandays_today !!}</td>
            <td>{!! $unit->mandays_todate !!}</td>
        </tr>
         @endforeach
        @endforeach
    <tr style="background-color: #9d9d9d">
        <td>Total</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{!! $rain_received !!}</td>
        <td></td>
        <td></td>
        <td></td>
        <td>{!! $round !!}</td>
        <td></td>
        <td></td>
    </tr>
    <tr></tr>
    <tr><td colspan="2" style="background-color: #9d9d9d; text-align: center">Electricity Unit Consumption</td></tr>
    <tr><td>Period</td><td>Todate</td></tr>
    <tr>
        <td>{!! $electricity_consumption['period'] !!}</td>
        <td>{!! $electricity_consumption['todate'] !!}</td>
    </tr>
    <tr></tr>
    <tr><td colspan="6" style="background-color: #9d9d9d;text-align: center"> Genset Log</td></tr>
    <tr><td colspan="2">Running Hours</td><td colspan="2">HSD Unit Consumed</td><td colspan="2">Unit Consumed</td></tr>
    <tr><td>Period</td><td>Todate</td><td>Period</td><td>Todate</td><td>Period</td><td>Todate</td></tr>
    <tr>
        <td>{!!  $genset_log['running_hours']['period'] !!}</td>
        <td>{!!  $genset_log['running_hours']['todate'] !!}</td>
        <td>{!!  $genset_log['hsd_consumed']['period'] !!}</td>
        <td>{!!  $genset_log['hsd_consumed']['todate'] !!}</td>
        <td>{!!  $genset_log['unit_consumed']['period'] !!}</td>
        <td>{!!  $genset_log['unit_consumed']['todate'] !!}</td>
    </tr>
    </tbody>
</table>
</body>
</html>
