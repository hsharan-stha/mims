<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="10">
        <th><h1>Nursery Plant Distribution Report</h1></th>
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
        <th>Section</th>
        <th>Seed Clone</th>
        <th>Planted In</th>
        <th>Quantity Issued</th>
        <th>Qty Rejected</th>
        <th>Remarks</th>
    </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allNurseryMasters as $allNursery)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! date('Y-m-d',strtotime($allNursery->date)) !!}</td>
            <td> {!! $allNursery->section['name'] !!}</td>
            <td> {!! $allNursery->seedClone['name'] !!}</td>
            <td> {!! $allNursery->planted_in !!}</td>
            <td> {!! $allNursery->qty_issued !!}</td>
            <td> {!! $allNursery->qty_rejected !!}</td>
            <td></td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>
