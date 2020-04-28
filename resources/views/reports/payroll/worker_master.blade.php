<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
        <tr colspan="10">
            <th><h1>Worker Master</h1> </th>
        </tr>
    </thead>
    <thead>
        <tr>
            <th>S.N</th>
            <th>Code</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact No</th>
            <th>Type</th>
            <th>Gender</th>
            <th>Join Date</th>
        </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allWorkerMasters as $worker)
        <tr>
            <?php $i=0;?>
                <td>{!! $i !!}</td>
                <td>{!! $worker->code !!}</td>
                <td>{!! $worker->name !!}</td>
                <td>{!! $worker->address !!}</td>
                <td>{!! $worker->contact_no !!}</td>
                <td>{!! $worker->type !!}</td>
                <td>{!! $worker->sex !!}</td>
                <td>{!! $worker->join_date !!}</td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>