<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="test/html"; charset="utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="10">
        <th><h1>Worker Attendence Master</h1></th>
    </tr>
    </thead>
    <thead>
    <tr>
        <th>S.N</th>
        <th>Date</th>
        <th>Employee Name</th>
        <th>Attendance Status</th>
        <th>Activity Name</th>
        <th>Paybook Name </th>
        <th>Total task</th>
        <th>Basic Pay</th>
        <th>Over Time</th>
        <th>Over Time Pay</th>
        <th>Bela 1 </th>
        <th>Bela 2</th>
        <th>Bela 3</th>
        <th>Section Name</th>
    </tr>
    </thead>
    <tbody>
    @foreach($allWorkerAttendences as $attendence)
        <tr>
            <?php $i=0;?>
            <td>{!! $i !!}</td>
            <td>{!! $staff->date !!}</td>
            <td>{!! $staff->worker['name'] !!}</td>
            <td>{!! $staff->attendence_status !!}</td>
            <td>{!! $saff->activity['name'] !!}</td>
            <td>{!! $staff->paybook['name'] !!}</td>
            <td>{!! $staff->total_task !!}</td>
            <td>{!! $staff->basic_pay !!}</td>
            <td>{!! $staff->ot !!}</td>
            <td>{!! $staff->ot_rate !!}</td>
            <td>{!! $staff->bela_1 !!}</td>
            <td>{!! $staff->bela_2 !!}</td>
            <td>{!! $staff->bela_3 !!}</td>
            <td>{!! $staff->section['name'] !!}</td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>