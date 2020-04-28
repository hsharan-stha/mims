<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="10">
        <th><h1>Earning Master</h1></th>
    </tr>
    </thead>
    <thead>
    <tr >
        <th>S.N</th>
        <th>Code</th>
        <th>Name</th>
        <th>Amount (RS)</th>
        <th>Percentage (%)</th>
    </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allEarningMasters as $earning)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $earning->code !!}</td>
            <td> {!!  $earning->name !!}</td>
            <td> {!! $earning->amount !!}</td>
            <td> {!! $earning->percentage !!}</td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>
