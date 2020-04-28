<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
        <tr colspan="10">
            <th><h1>Sectional Shade Tree</h1></th>
        </tr>
    </thead>
    <thead>
        <tr >
            <th>S.N</th>
            <th>Date</th>
            <th>Section</th>
            <th>Shade Tree</th>
            <th>Shade Status</th>
            <th>No of Trees</th>
        </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allSections as $shadeTree)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $shadeTree->date !!}</td>
            <td> {!! $shadeTree->section['name'] !!}</td>
            <td> {!! $shadeTree->shadeTreeType['name'] !!}</td>
            <td> {!! $shadeTree->shade_status !!}</td>
            <td> {!! $shadeTree->no_of_trees !!}</td>
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