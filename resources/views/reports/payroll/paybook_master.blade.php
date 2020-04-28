<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="10">
        <th><h1>Paybook Master</h1></th>
    </tr>
    </thead>
    <thead>
    <tr >
        <th>S.N</th>
        <th>Code</th>
        <th>Name</th>
        <th>Applicable Sex</th>
        <th>Status</th>
        <th>Worker category</th>
        <th>Earning</th>
        <th>Deduction</th>
    </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allPaybooks as $paybook)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $paybook->code !!}</td>
            <td> {!!  $paybook->name !!}</td>
            <td> {!! $paybook->applicable_sex !!}</td>
            <td> {!! $paybook->status !!}</td>
            <td> {!!  $paybook->worker_category !!}</td>
            <td> {!! $paybook->earning !!}</td>
            <td> {!! $paybook->deduction !!}</td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>
