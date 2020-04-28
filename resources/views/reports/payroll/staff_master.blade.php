<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="test/html"; charset="utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="10">
        <th><h1>Staff Master</h1></th>
    </tr>
    </thead>
    <thead>
    <tr>
        <th>S.N</th>
        <th>Code</th>
        <th>Name</th>
        <th>Address</th>
        <th>Contact No</th>
        <th>Contact Person</th>
        <th>Contact Person No</th>
        <th>Type</th>
        <th>Division</th>
        <th>Sex</th>
        <th>Maritial Status</th>
        <th>Date of Birth</th>
        <th>Blood Group</th>
        <th>Education</th>
        <th>Pf Number</th>
        <th> Pf Flag</th>
        <th>Lic Flag</th>
        <th>Lic Number</th>
        <th>Join Date</th>
        <th>House No</th>
        <th>Status</th>
    </tr>
    </thead>
    <tbody>
    @foreach($allStaffMasters as $staff)
    <tr>
        <?php $i=0;?>
        <td>{!! $i !!}</td>
        <td>{!! $staff->code !!}</td>
        <td>{!! $staff->name !!}</td>
        <td>{!! $staff->address !!}</td>
        <td>{!! $saff->contact_no !!}</td>
        <td>{!! $staff->contact_person !!}</td>
        <td>{!! $staff->contact_person_no !!}</td>
        <td>{!! $staff->type !!}</td>
        <td>{!! $staff->division['name'] !!}</td>
        <td>{!! $staff->sex !!}</td>
        <td>{!! $staff->maritial_status !!}</td>
        <td>{!! $staff->date_of_birth !!}</td>
        <td>{!! $staff->blood_group !!}</td>
        <td>{!! $staff->education !!}</td>
        <td>{!! $staff->pf_number !!}</td>
        <td>{!! $staff->pf_flag !!}</td>
        <td>{!! $staff->lic_flag !!}</td>
        <td>{!! $staff->lic_number !!}</td>
        <td>{!! $staff->join_date !!}</td>
        <td>{!! $staff->house_no !!}</td>
        <td>{!! $staff->status !!}</td>
    </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>