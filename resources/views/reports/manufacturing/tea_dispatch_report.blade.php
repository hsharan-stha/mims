<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    @if($sample == 0)
    <thead>
        <tr colspan="11">
            <th><h1>Tea Dispatch Report</h1></th>
        </tr>
    </thead>
    <thead><tr><th>Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
    <thead><tr><th>Date To: {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>
    <thead>
        <tr>
            <th>S.N</th>
            <th>Invoice No.</th>
            <th>Invoice Date</th>
            <th>From Station</th>
            <th>Destination</th>
        </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allTeaDispatchs as $teaDispatch)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $teaDispatch->invoice_no !!}</td>
            <td> {!! $teaDispatch->invoice_date !!}</td>
            <td> {!! $teaDispatch->from_station !!}</td>
            <td> {!! $teaDispatch->destination !!}</td>
            <td>
            <table>
                <thead>
                @if($i==1)
                    <tr>
                        <th>Tea Pack No.</th>
                        <th>Tea Grade</th>
                        <th>No of Bag</th>
                        <th>Net Per Bag</th>
                        <th>Quantity</th>
                        <th>Quality of Bag</th>                 
                    </tr>
                    @else
                    <tr>
                    </tr>
                    @endif
                </thead>
                    <tbody>
                    @foreach($teaDispatch->teaDispatchDetails as $item)
                        <tr>
                            <td> {!! $item->teaPack['invoice_no'] !!}</td>
                            <td> {!! $item->teaGrade['name'] !!}</td>
                            <td> {!! $item->no_of_bag !!}</td>
                            <td> {!! $item->net_per_bag !!}</td>
                            <td> {!! $item->total_qty !!}</td>
                            <td> {!! $item->quality_of_bag !!}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </td>
        </tr>
    @endforeach
    </tbody>
    {{--  Else Part for Sample report  --}}
    @else
        <thead>
            <tr colspan="7">
                <th><h1>Sample Tea Dispatch Report</h1></th>
            </tr>
        </thead>
        <thead><tr><th>Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
        <thead><tr><th>Date To: {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>
        <thead>
            <tr>
                <th>S.N</th>
                <th>Invoice No.</th>
                <th>Invoice Date</th>
                <th>From Station</th>
                <th>Destination</th>
            </tr>
        </thead>
        <tbody>
        <?php $i=0;?>
        @foreach($allTeaDispatchs as $teaDispatch)
            <tr>
                <?php $i++;?>
                <td>{!! $i !!}</td>
                <td> {!! $teaDispatch->invoice_no !!}</td>
                <td> {!! $teaDispatch->invoice_date !!}</td>
                <td> {!! $teaDispatch->from_station !!}</td>
                <td> {!! $teaDispatch->destination !!}</td>
                <td>
                <table>
                    <thead>
                    @if($i==1)
                        <tr>
                            <th>Tea Grade</th>
                            <th>Quantity</th>            
                        </tr>
                        @else
                        <tr>
                        </tr>
                        @endif
                    </thead>
                        <tbody>
                        @foreach($teaDispatch->teaDispatchDetails as $item)
                            <tr>
                                <td> {!! $item->teaGrade['name'] !!}</td>
                                <td> {!! $item->total_qty !!}</td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </td>
            </tr>
        @endforeach
        </tbody>
        @endif
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