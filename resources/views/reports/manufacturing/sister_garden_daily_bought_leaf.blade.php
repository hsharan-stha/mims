<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="10">
        <th><h1>Sister Garden Daily Bought Leaf</h1></th>
    </tr>
    </thead>
    <thead>
    <tr >
        <th>S.N</th>
        <th>Date</th>
        <th>Sister Garden</th>
        <th>Green Leaf (Kg)</th>
        <th>Fine %</th>
        <th>Fine Green Leaf(Kg)</th>
        <th>Rate</th>
        <th>Amount</th>
        <th>Receipt No.</th>
    </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allSisterGardenDailyLeafs as $dailyLeaf)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $dailyLeaf->weight_date !!}</td>
            <td> {!! $dailyLeaf->sisterGarden['name'] !!}</td>
            <td> {!! $dailyLeaf->green_leaf!!}</td>
            <td> {!! $dailyLeaf->fine_percentage !!}</td>
            <td> {!! $dailyLeaf->fine_green_leaf !!}</td>
            <td> {!! ($dailyLeaf->rate) !!}</td>
            <td> {!! $boughtLeaf->amount !!}</td>
            <td> {!! (($boughtLeaf->receipt_no !!}</td>

        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>
