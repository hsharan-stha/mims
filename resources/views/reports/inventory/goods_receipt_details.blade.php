<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body>
<table border="1">
    <thead>
    <tr>
        <th>Date From:</th><th>{{$date_from}}</th>
        <th></th>
        <th>Date To:</th><th>{{$date_to}}</th>
    </tr>
    <tr>
        <th>GRN_no</th>
        <th>GRN Date</th>
        <th>Item name</th>
        <th>Financial year</th>
        <th>quantity</th>
        <th>rate</th>
        <th>value</th>
        <th>Total</th>
        <th>Store name</th>
        <th>vendor name</th>
        <th>received by</th>
    </tr>
    </thead>
    <tbody>
    @foreach($grn_details as $gd)
        <tr>
            <td>{{$gd->grn_no}}</td>
            <td>{{$gd->grn_date}}</td>
            <td>{{$gd->item_name}}</td>
            <td>{{$financial_year}}</td>
            <td>{{$gd->quantity}}</td>
            <td>{{$gd->rate}}</td>
            <td>{{$gd->value}}</td>
            <td>{{$gd->total}}</td>
            <td>{{$gd->store_name}}</td>
            <td>{{$gd->vendor_name}}</td>
            <td>{{$received_by}}</td>
        </tr>
    @endforeach
    </tbody>

</table>
</body>
</html>
<?php
