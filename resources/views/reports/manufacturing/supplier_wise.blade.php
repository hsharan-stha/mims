<!DOCTYPE html>
<html>
<head>

</head>


<table>
    <thead><tr colspan="10"><th><h1>Supplierwise Bought Leaf</h1>
        </th></tr></thead>
    <thead><tr colspan="10"><th>Date From: {!! $date['date_from_en'] !!}  Date To: {!! $date['date_to_en'] !!}</th></tr></thead>
    <thead><tr colspan="10"><th>Miti From: {!! $date['date_from_np'] !!}  Miti To: {!! $date['date_to_np'] !!}</th></tr></thead>
    <thead><tr >
        <th>Receipt No</th>
        <th>Date Time</th>
        <th>Name of Supplier</th>
        <th>Gross Weight(Kg)</th>
        <th>Vehicle Deduction(Kg)</th>
        <th>Received (Kg)</th>
        <th>Deduction (%)</th>
        <th>Deduction (Kg)</th>
        <th>Net Received (Kg)</th>
        <th>Fine(%)</th>
    </tr></thead>
    <tbody>
    <?php $total['green_leaf']=0;?>
    @foreach($allLeaves as $leave)<tr>
        <td>{!! $leave->receipt_no !!}</td>
        <td>{!! $leave->weight_date !!}</td>
        <td>{!! $leave->supplier->name !!}</td>
        <td>{!! $leave->gross_weight !!}</td>
        <td>{!! $leave->vehicle_weight_deduction !!}</td>
        <td>{!! $leave->green_leaf !!}</td>
        <td>{!! $leave->deduction_percentage !!}</td>
        <td>{!! $deducted =($leave->green_leaf)*($leave->deduction_precentage)/100 !!}</td>
            <td>{!! $leave->net_received_green_leaf !!}</td>
            <?php $total['green_leaf']= $total['green_leaf'] + ($leave->net_received_green_leaf) ;?>
        <td>{!! $leave->fine_percentage !!}</td>
    </tr>@endforeach
    <tr><td colspan="10"> Total Green Leaf: {!! $total['green_leaf'] !!}</td></tr>
    </tbody>
</table>
</body>
</html>
