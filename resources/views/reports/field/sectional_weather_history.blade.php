<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
        <tr colspan="10">
            <th><h1>Sectional Weather History</h1></th>
        </tr>
    </thead>
    <thead><tr ><th colspan="10">Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
    <thead><tr ><th colspan="10">Date To : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>
    <thead>
        <tr >
            <th>S.N</th>
            <th>Date</th>
            <th>Section</th>
            <th>Rain Fall</th>
            <th>Minimum Temperature</th>
            <th>Maximum Temperature</th>
            <th>Minimum Humidity</th>
            <th>Maximum Humidity</th>
        </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allSectionalWeatherHistories as $history)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $history->date !!}</td>
            <td> {!! $history->section['name'] !!}</td>
            <td> {!! $history->rainfall !!}</td>
            <td> {!! $history->min_temp !!}</td>
            <td> {!! $history->max_temp !!}</td>
            <td> {!! $history->min_humidity !!}</td>
            <td> {!! $history->max_humidity !!}</td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>
<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 12/21/2017
 * Time: 10:19 PM
 */