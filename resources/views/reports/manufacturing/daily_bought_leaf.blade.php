<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
        <tr colspan="10">
            <th><h1>Daily Bought Leaf</h1></th>
        </tr>
    </thead>
    @if($date)<thead><tr colspan="10"><th>Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr>
    <tr colspan="10"><th>Date To : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr>
    </thead>@endif
    <thead>
        <tr >
            <th>S.N</th>
            <th>Weight Date</th>
            <th>Receipt No</th>
            <th>Supplier</th>
            <th>Gross Weight(Kg)</th>
            <th>Vehicle Weight Deduction(Kg)</th>
            <th>Green Leaf Received(Kg)</th>
            <th>Deduction %</th>
            <th>Deduction (Kg)</th>
            <th>Net Received (Kg)</th>
            <th>Fine %</th>
        </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allLeaves as $boughtLeaf)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $boughtLeaf->weight_date !!}</td>
            <td> {!!  $boughtLeaf->receipt_no !!}</td>
            <td> {!! $boughtLeaf->supplier['name'] !!}</td>
            <td> {!! $boughtLeaf->gross_weight !!}</td>
            <td> {!! $boughtLeaf->vehicle_weight_deduction !!}</td>
            <td> {!! ($boughtLeaf->gross_weight - $boughtLeaf->vehicle_weight_deduction) !!}</td>
            <td> {!! $boughtLeaf->deduction_percentage !!}</td>
            <td> {!! (($boughtLeaf->gross_weight - $boughtLeaf->vehicle_weight_deduction) * $boughtLeaf->deduction_percentage)/100 !!}</td>
            <td> {!! (($boughtLeaf->gross_weight - $boughtLeaf->vehicle_weight_deduction)-(($boughtLeaf->gross_weight - $boughtLeaf->vehicle_weight_deduction) * $boughtLeaf->deduction_percentage)/100) !!}</td>
            <td> {!! $boughtLeaf->fine_percentage !!}</td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>
