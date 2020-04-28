<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
        <tr colspan="10">
            <th><h1>Sectional Infilling History</h1></th>
        </tr>
    </thead>
    <thead><tr ><th colspan="10">Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
    <thead><tr ><th colspan="10">Date To: {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>

    <thead>
        <tr >
            <th>S.N</th>
            <th>Date</th>
            <th>Section</th>
            <th>Bush Variety</th>
            <th>Bush Clone Variety</th>
            <th>Bush Type</th>
            <th>Area Covered</th>
            <th>Plant Infilled</th>
            <th>No of Trees</th>
            <th>Bush No</th>
            <th>Bush Density</th>
        </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allSectionalInfillingHistorys as $history)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! date('Y-m-d',strtotime($history->date)) !!}</td>
            <td> {!! $history->section['name'] !!}</td>
            <td> {!! $history->bushVariety['name'] !!}</td>
            <td> {!! $history->bushCloneVariety['name'] !!}</td>
            <td> {!! $history->bushType['name'] !!}</td>
            <td> {!! $history->area_covered !!}</td>
            <td> {!! $history->plant_infilled !!}</td>
            <td> {!! $history->no_of_trees !!}</td>
            <td> {!! $history->bush_no !!}</td>
            <td> {!! $history->bush_density !!}</td>
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