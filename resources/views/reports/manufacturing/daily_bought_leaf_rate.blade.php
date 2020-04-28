<!DOCTYPE html>
<html>
<head>

</head>


<table>
    <thead><tr colspan="10"><th><h1>Daily BoughtLeaf Rate</h1>
        </th></tr></thead>
    @if($date)<thead><tr colspan="10"><th>Date : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr>
    </thead>@endif
    <thead><tr >
        <th>Date</th>
        <th>Suppliers Name</th>
        <th>Mobile No</th>
        <th>Fine (%)</th>
        <th>Green Leaf(Kg)</th>
        <th>Rate</th>
        <th>Amount</th>
        <th>Carrying Charge Rate</th>
        <th>Carrying Charge Amount</th>
        <th>Daily Incentive Rate</th>
        <th>Daily Incentive Amount</th>
        <th>Total Amount</th>
        <th>Cost per Kg</th>
    </tr></thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allLeaves as $leaf)<tr>
        <?php $i++;$green_leaf_amount=0;$carrying_charge_amount=0;$incentive_amount=0;$total_amount=0;?>
        <td>{!! $leaf->weight_date !!}</td>
        <td>{!! $leaf->supplier->name !!}</td>
        <td>{!! $leaf->supplier->contact_no !!}</td>
        <td>{!! $leaf->fine_percentage !!}</td>
        <td>{!! $leaf->green_leaf !!}</td>
        <td>{!! $leaf->rate !!}</td>
        <td>{!! $green_leaf_amount=$leaf->green_leaf*$leaf->rate !!}</td>
        <td>{!! $leaf->carrying_charge_rate !!}</td>
        <td>{!! $carrying_charge_amount=$leaf->green_leaf*$leaf->carrying_charge_rate !!}</td>
        <td>{!! $leaf->daily_incentive_rate !!}</td>
        <td>{!! $incentive_amount=$leaf->green_leaf*$leaf->daily_incentive_rate !!}</td>
        <td>{!! $total_amount=$carrying_charge_amount+$green_leaf_amount+$incentive_amount !!}</td>
        <td>@if($leaf->green_leaf != 0){!! $total_amount/$leaf->green_leaf !!}@else {!! 0 !!}@endif</td>
    </tr>@endforeach
    </tbody>
</table>
</body>
</html>