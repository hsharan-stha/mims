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
        <th>S.No.</th>
        <th>Suppliers Name</th>
        <th>Mobile No</th>
        <th>Green Leaf(Kg)</th>
        <th>Average Rate</th>
        <th>Amount</th>
        <th>Carrying Charge Amount</th>
        <th>Total Amount</th>
    </tr></thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allLeaves as $leave)<tr>
        <?php $i++;$green_leaf_amount=0;$carrying_charge_amount;?>
        <td>{!! $i !!}</td>
        <td>{!! $leave[0]->supplier->name !!}</td>
        <td>{!! $leave[0]->supplier->contact_no !!}</td>
        <td>{!! $leave->sum('green_leaf') !!}</td>
        <td>{!! $leave->avg('rate') !!}</td>
        <td>{!! $green_leaf_amount=$leave->sum('green_leaf')*$leave->avg('rate') !!}</td>
        <td>{!! $carrying_charge_amount=$leave->sum('green_leaf')*$leave->avg('carrying_charge_rate') !!}</td>
        <td>{!! $carrying_charge_amount+$green_leaf_amount !!}</td>
    </tr>@endforeach
    </tbody>
</table>
</body>
</html>
