<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="10">
        <th><h1>Supplier</h1></th>
    </tr>
    </thead>
    <thead>
    <tr >
        <th>S.N</th>
        <th>Name</th>
        <th>Address</th>
        <th>Contact No</th>
        <th>Type</th>
    </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allSupplier as $supplier)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $supplier->name !!}</td>
            <td> {!!  $supplier->address !!}</td>
            <td> {!! $supplier->contact_no !!}</td>
            <td> {!! $supplier->type !!}</td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>
