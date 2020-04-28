<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="10">
        <th><h1>Deduction Master</h1></th>
    </tr>
    </thead>
    <thead>
    <tr >
        <th>S.N</th>
        <th>Code</th>
        <th>Name</th>
    </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allDeductions as $deduction)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $deduction->code !!}</td>
            <td> {!!  $deduction->name !!}</td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>
