<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead><tr colspan="10"><th><h1>Requisition Detail Report</h1>
        </th></tr></thead>
    <thead><tr ><th colspan="10">Date : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
    <thead><tr ><th colspan="10">Date : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>

    <thead>
        <tr colspan="8">
            @if($fromStore && $toStore)
                <th><h1>From {!! $fromStore !!} To {!! $toStore !!}</h1></th>
            @elseif($fromStore)
                <th><h1>From {!! $fromStore !!}</h1></th>
            @else

            @endif
        </tr>
    </thead>
    <thead>
        <tr>
            <th>S.N</th>
            <th>Indent Date</th>
            <th>Indent Number</th>
            <th>To Store</th>
        </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allDetails as $Details)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $Details->indent_date !!}</td>
            <td> {!! $Details->indent_no !!}</td>
            <td> {!! $Details->toStore['name'] !!}</td>
            <td> 
                <table>
                    <thead>
                    @if($i==1)
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Remarks</th>
                    </tr>
                    @else
                    <tr>
                    </tr>
                    @endif
                    </thead>
                    <tbody>
                    @foreach($Details->requisitionItemDetails as $item)
                        <tr>
                            <td> {!! $item->item['name'] !!}</td>
                            <td> {!! $item->quantity !!}</td>
                            <td> {!! $item->item['unit']['name'] !!}</td>
                            <td> {!! $item->remarks !!}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </td>
            <td></td>
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