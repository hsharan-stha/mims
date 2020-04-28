<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="10">
        <th><h1>Dryer Master</h1></th>
    </tr>
    </thead>
    <thead>
    <tr >
        <th>S.N</th>
        <th>Dryer No</th>
        <th>Manufacturer</th>
        <th>Installation Date</th>
        <th>Last Overhauling Date</th>
        <th>Throughput Rate</th>
    </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allDryers as $dryer)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $dryer->dryer_no !!}</td>
            <td> {!!  $dryer->manufacturer !!}</td>
            <td> {!! $dryer->installation_date['name'] !!}</td>
            <td> {!! $dryer->last_overhauling_date !!}</td>
            <td> {!! $dryer->throughput_rate !!}</td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>