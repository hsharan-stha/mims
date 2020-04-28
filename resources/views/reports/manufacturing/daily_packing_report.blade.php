<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="10">
        <th><h1>Tea Packing Report</h1></th>
    </tr>
    </thead>
    @if($date)
    <thead><tr ><th colspan="10">Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
    <thead><tr ><th colspan="10">Date To : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>
    @endif
    <thead>
    <tr>
        <th>S.N</th>
        <th>Date</th>
        <th>Invoice No.</th>
        <th>Grade</th>
        <th>No. of Bag</th>
        <th>Net Per Bag</th>
        <th>Total Qty.</th>
        <th>Quality of Bags</th>
        <th>Remarks</th>
    </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allTeaPacks as $teaPack)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $teaPack->pack_date !!}</td>
            <td> {!! $teaPack->invoice_no !!}</td>
            <td> {!! $teaPack->teaGrade['name'] !!}</td>
            <td> {!! $teaPack->no_of_bag !!}</td>
            <td> {!! $teaPack->net_per_bag !!}</td>
            <td> {!! $teaPack->total_qty !!}</td>
            <td> {!! $teaPack->quality_of_bag !!}</td>
            <td></td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>
