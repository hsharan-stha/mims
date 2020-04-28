<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="10">
        <th><h1>Activity Master</h1></th>
    </tr>
    </thead>
    <thead>
    <tr >
        <th>S.N</th>
        <th>Code</th>
        <th>Name</th>
        <th>Activity Group</th>
        <th>Minimum Task</th>
        <th>Unit</th>
    </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allActivityMasters as $activity)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $activity->code !!}</td>
            <td> {!!  $activity->name !!}</td>
            <td> {!! $activity->activity_group['name'] !!}</td>
            <td> {!! $activity->minimum_task !!}</td>
            <td> {!! $activity->unit_of_task !!}</td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>