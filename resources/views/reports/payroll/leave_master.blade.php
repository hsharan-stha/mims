<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="10">
        <th><h1>Leave Master</h1></th>
    </tr>
    </thead>
    <thead>
    <tr >
        <th>S.N</th>
        <th>Code</th>
        <th>Sex</th>
        <th>Leave Per Year</th>
        <th>Carry Forward</th>
    </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allLeaveMasters as $leave)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $leave->code !!}</td>
            <td> {!! $leave->sex !!}</td>
            <td> {!! $leave->leave_per_year !!}</td>
            <td> {!! $leave->carry_forward !!}</td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>
