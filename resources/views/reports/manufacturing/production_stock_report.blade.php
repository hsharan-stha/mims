<!DOCTYPE html>
<html>
<head>

</head>
<table>
    <tr><td colspan="3" rowspan="2" style="font-weight: bold;">Production Stock Report</td>
        @if($date)<td colspan="2">Date : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</td>@endif
    </tr>
    <tr></tr>
    <tr style="font-weight: 800;background-color: #9d9d9d;text-align:center;">
        <td> Invoice No </td>
        <td>Tea Grade</td>
        <td>No of Bag</td>
        <td>Net Per Bag</td>
        <td>Total Quantity</td>
    </tr>
    @foreach($productionStocks as $stockItem)
    <tr>
        <td>@if($stockItem['teaPack']){!! $stockItem['teaPack']['invoice_no'] !!}@endif</td>
        <td>@if($stockItem['teaGrade']){!! $stockItem['teaGrade']['name'] !!}@endif</td>
        <td>{!! $stockItem['no_of_bag'] !!}</td>
        <td>{!! $stockItem['net_per_bag'] !!}</td>
        <td>{!! $stockItem['total_qty'] !!}</td>
    </tr>
    @endforeach
</table>
</body>
</html>
