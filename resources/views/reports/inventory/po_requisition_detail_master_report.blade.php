<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead><tr colspan="10"><th><h1>Purchase Order Details Report</h1>
        </th></tr></thead>
    @if($date)
    <thead><tr ><th colspan="10">Date : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
    <thead><tr ><th colspan="10">Date : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>
    @endif
    <thead>
        <tr colspan="11">
            @if($type=='req')
                @if($fromStore && $toVendor)
                    <th><h1>From {!! $fromStore !!} To {!! $toVendor !!}</h1></th>
                @elseif($fromStore)
                    <th><h1>From {!! $fromStore !!}</h1></th>
                @else
                @endif
            @elseif($type=='dpo')
                @if($fromStore && $toVendor)
                    <th><h1>From {!! $fromStore !!} To {!! $toVendor !!}</h1></th>
                @elseif($fromStore)
                    <th><h1>From {!! $fromStore !!}</h1></th>
                @else
                @endif
            @endif
        </tr>
    </thead>
    <thead>
        <tr>
            <th>S.N</th>
            <th>Date</th>
            <th>Purchase Number</th>
            <th>Type</th>
            <th>To Vendor</th>
        </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allDetails as $Details)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $Details->po_date !!}</td>
            <td> {!! $Details->po_no !!}</td>
            <td> {!! $Details->type !!}</td>
            <td> {!! $Details->vendor['name'] !!}</td>
            <td> 
                <table>
                    <thead>
                    @if($i==1)
                    <tr>
                        <th>Requisition Id</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Total</th>
                        <th>Remarks</th>
                    </tr>
                    @else
                    <tr>
                    </tr>
                    @endif
                    </thead>
                    <tbody>
                    @foreach($Details->poItemRequisitionDetails as $item)
                        <tr>
                            <td> {!! $item->requisition_id !!}</td>
                            <td> {!! $item->item['name'] !!}</td>
                            <td> {!! $item->quantity !!}</td>
                            <td> {!! $item->rate !!}</td>
                            <td> {!! $item->total !!}</td>
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