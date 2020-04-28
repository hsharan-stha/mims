<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
        <tr colspan="10">
            <th><h1>Sectional Plucking History</h1></th>
        </tr>
    </thead>
    <thead><tr ><th colspan="10">Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
    <thead><tr ><th colspan="10">Date To : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>
    <thead>
        <tr >
            <th>S.N</th>
            <th>Date</th>
            <th>Section</th>
            <th>Area Plucked</th>
            <th>Green Leaf Plucked(Kg)</th>
            <th>Recovery </th>
            <th>Tea Made</th>
            <th>No of Rounds</th>
        </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allSectionalPluckingHistories as $history)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $history->date !!}</td>
            <td> {!! $history->section['name'] !!}</td>
            <td> {!! $history->area_plucked !!}</td>
            <td> {!! $history->leaf_plucked !!}</td>
            <td>{!! $history->recovery_percentage !!}</td>
            <td> {!! $history->tea_made !!}</td>
            <td> {!! $history->no_of_rounds !!}</td>
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