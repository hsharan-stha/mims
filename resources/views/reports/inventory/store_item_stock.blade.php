<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
        <tr colspan="6">
            <th><h1>Item Current Stock</h1></th>
        </tr>
    </thead>
    @if($date)
        <thead><tr ><th colspan="6">Date: {!! $date['date_en'] !!}  Miti: {!! $date['date_np'] !!}</th></tr></thead>
    @endif
    <thead>
        <tr>
            <th>S.N</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Value</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($storeStockItems as $storeStockItem)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $storeStockItem->name !!}</td>
            <td> {!! $storeStockItem->quantity !!}</td>
            <td> {!! $storeStockItem->rate !!}</td>
            <td> {!! $storeStockItem->value !!}</td>
            <td>&nbsp;{!! $storeStockItem->status !!}</td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>
