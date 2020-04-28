<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body>
<table border="1">
    <thead>
    <tr>
        <th>S.N</th>
        <th>GRN Date</th>
        <th>GRN No.</th>
        <th>Vendor Chalan No.</th>
        <th>Bill Code</th>
        <th>Bill No</th>
        <th>To Vendor</th>
        <th>From Store</th>
        <th>data</th>
    </tr>
    </thead>
    <tbody>
    <?php $i = 0;?>
    @foreach($allPOs as $po)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $po->grn_date !!}</td>
            <td> {!! $po->grn_no !!}</td>
            <td> {!! $po->vendor_chalaan_no !!}</td>
            <td> {!! $po->bill_code !!}</td>
            <td> {!! $po->bill_no !!}</td>
            <td> {!! $po->vendor['name'] !!}</td>
            <td> {!! $po->store['name'] !!}</td>
            <td>
                <table border="1">
                    <thead>
                    @if($i==1)
                        <tr>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                            <th>Rate</th>
                            <th>purchase price({{$po->grnItems[0]->foreign_currency}})</th>
                            <th>purchase price(Nrs)</th>
                            @foreach($po->grnItems[0]->grnBillSundryDetails as $gbsd)
                                <th>{!! $gbsd->billSundry->name !!}</th>
                            @endforeach
                            <th>Total</th>
                            <th>unit rate({{$po->grnItems[0]->foreign_currency}})</th>
                            <th>Remarks</th>
                        </tr>
                    @else
                        <tr>
                        </tr>
                    @endif
                    </thead>
                    <tbody>
                    @foreach($po->grnItems as $item)
                        <tr>
                            <td> {!! $item->item->name !!}</td>
                            <td> {!! $item->quantity !!}</td>
                            <td> @if($item->item->unit){!! $item->item->unit->name !!}@endif</td>
                            <td> {!! $item->rate !!}</td>
                            <td> {!! $item->value !!}</td>
                            <td> {!! $item->value_after_Frate !!}</td>
                            @foreach($item->grnBillSundryDetails as $gbsd)
                                <td>{!! $gbsd->value !!}</td>
                            @endforeach
                            <td> {!! $item->total !!}</td>
                            <td> {!! $item->total/$item->quantity !!}</td>
                            <td> {!! $item->remarks !!}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </td>
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