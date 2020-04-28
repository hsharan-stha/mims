<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
        <tr colspan="35">
            <th><h1>Worker Leave Status Report</h1></th>
        </tr>
    </thead>
    <thead>
        <tr >
            <th>S.N</th>
            <th>Worker</th>
            <th>Leave Name</th>
            <th>No of Leave taken</th>
            <th>Remaining Leave</th>
        </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allWorkerLeaveStatus as $workerLeaveStatus)
        @foreach($workerLeaveStatus as $workerLeave)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $workerLeave->worker['name'] !!}</td>
            <td> {!! $workerLeave->leave['name'] !!}</td>
            <td> {!! $workerLeave->no_leave_taken !!}</td>
            <td> {!! ($workerLeave->leave['leave_per_year'])-($workerLeave->no_leave_taken) !!}</td>
        </tr>
        @endforeach
    @endforeach
    </tbody>
</table>
</body>
</html>
