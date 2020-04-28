<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead><tr colspan="10"><th><h1>Material Issue Report</h1></th></tr></thead>
    @if($date)
    <thead><tr ><th colspan="10">Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
    <thead><tr ><th colspan="10">Date To : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>
    @endif
        <thead>
        <tr colspan="10">
            @if($fromStore)
                <th><h1>From {!! $fromStore !!}</h1></th>
            @else
                <th></th>
            @endif
        </tr>
    </thead>
    <tr></tr>
    <tr></tr>
    <thead>
        <tr>
            <th>S.N</th>
            <th>Issue Date</th>
            <th>Issue No.</th>
            <th>Issued For</th>
        </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allMaterialIssues as $materialIssue)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $materialIssue->issue_date !!}</td>
            <td> {!! $materialIssue->issue_no !!}</td>
            <td>
                @if($materialIssue->to_store_id == null && $materialIssue->type == 'sc' )
                {!! "Store Consumption" !!}
                @elseif($materialIssue->to_store_id == null && $materialIssue->type == 'adj')
                {!! "Adjustment" !!}
                @else
                    {!! $materialIssue->toStore["name"]  !!}
                @endif
            </td>
            <td> 
                <table>
                    <thead>
                    @if($i==1)
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Value</th>
                        <th>Total</th>
                        <th>Remarks</th>
                    </tr>
                    @else
                    <tr>
                    </tr>
                    @endif
                    </thead>
                    <tbody>
                    @foreach($materialIssue->materialIssueDetails as $item)
                        <tr>
                            <td> {!! $item->item['name'] !!}</td>
                            <td> {!! $item->quantity !!}</td>
                            <td> {!! $item->rate !!}</td>
                            <td> {!! $item->value !!}</td>
                            <td> {!! ($item->value * $item->rate)  !!}</td>
                            <td> {!! $item->consumed_detail !!}</td>
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