<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="10">
        <th><h1>Sister Garden</h1></th>
    </tr>
    </thead>
    <thead>
    <tr >
        <th>S.N</th>
        <th>Code</th>
        <th>Name</th>
        <th>Address</th>
        <th>Contact Person</th>
        <th>Contact Number</th>
    </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allGardens as $garden)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $garden->code !!}</td>
            <td> {!!  $garden->name !!}</td>
            <td> {!! $garden->address !!}</td>
            <td> {!! $garden->contact_person !!}</td>
            <td>{!! $garden->contact_number !!}</td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>
