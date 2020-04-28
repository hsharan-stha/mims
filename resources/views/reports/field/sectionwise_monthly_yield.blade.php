<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="10">
        <th><h1>Sectionwise Green Leaf Report (Monthly) </h1></th>
    </tr>
    </thead>
    <thead><tr ><th colspan="10">Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
    <thead><tr ><th colspan="10">Date To : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>
    @if($sections)
    <thead>

    <tr >
        <th>Section .No</th>
        <th colspan="2" rowspan="2">Area Under Tea</th>
        <th colspan="2" rowspan="2">Prune Plan</th>
        <th colspan="4">Area Plucked</th>
        <th colspan="4">No.of Rounds</th>
        <th colspan="4">Green Leaf Plucked</th>
        <th colspan="4">Tea Made per Hec.</th>
        <th>Remarks</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th colspan="2">Period</th>
        <th colspan="2">Todate</th>
        <th colspan="2">Period</th>
        <th colspan="2">Todate</th>
        <th colspan="2">Period</th>
        <th colspan="2">Todate</th>
        <th colspan="2">Period</th>
        <th colspan="2">Todate</th>
        <th></th>
    </tr>
    <tr>
        <th></th>
        <th>{!! $sections[0]['current'] !!}</th>
        <th>{!! $sections[0]['last'] !!}</th>
        <th>{!! $sections[0]['current'] !!}</th>
        <th>{!! $sections[0]['last'] !!}</th>
        <th>{!! $sections[0]['current'] !!}</th>
        <th>{!! $sections[0]['last'] !!}</th>
        <th>{!! $sections[0]['current'] !!}</th>
        <th>{!! $sections[0]['last'] !!}</th>
        <th>{!! $sections[0]['current'] !!}</th>
        <th>{!! $sections[0]['last'] !!}</th>
        <th>{!! $sections[0]['current'] !!}</th>
        <th>{!! $sections[0]['last'] !!}</th>
        <th>{!! $sections[0]['current'] !!}</th>
        <th>{!! $sections[0]['last'] !!}</th>
        <th>{!! $sections[0]['current'] !!}</th>
        <th>{!! $sections[0]['last'] !!}</th>
        <th>{!! $sections[0]['current'] !!}</th>
        <th>{!! $sections[0]['last'] !!}</th>
        <th>{!! $sections[0]['current'] !!}</th>
        <th>{!! $sections[0]['last'] !!}</th>
        <th></th>
        </tr>
    </thead>
    @endif
    <tbody>
    @if($sections)
    @foreach($sections as $section)
        <tr>
            <td>{!! $section['name'] !!}</td>
            <td>{!! $section[0]['area'] !!}</td>
            <td>{!! $section[1]['area'] !!}</td>
            <td>{!! $section[0]['prune_style'] !!}</td>
            <td>{!! $section[1]['prune_style'] !!}</td>
            <td>{!! round($section[0]['month_total_plucked_area'],2) !!}</td>
            <td>{!! round($section[1]['month_total_plucked_area'],2) !!}</td>
            <td>{!! round($section[0]['todate_total_plucked_area'],2) !!}</td>
            <td>{!! round($section[1]['todate_total_plucked_area'],2) !!}</td>
            <td>{!! round($section[0]['month_total_round'],2) !!}</td>
            <td>{!! round($section[1]['month_total_round'],2) !!}</td>
            <td>{!! round($section[0]['todate_total_round'],2) !!}</td>
            <td>{!! round($section[1]['todate_total_round'],2) !!}</td>
            <td>{!! round($section[0]['month_total_leaf_plucked'],2) !!}</td>
            <td>{!! round($section[1]['month_total_leaf_plucked'],2) !!}</td>
            <td>{!! round($section[0]['todate_total_leaf_plucked'],2) !!}</td>
            <td>{!! round($section[1]['todate_total_leaf_plucked'],2) !!}</td>
            <td>@if($section[0]['area'] != 0){!! round($section[0]['month_total_tea_made']/$section[0]['area'],2) !!} @else 0 @endif</td>
            <td>@if($section[1]['area'] != 0){!! round($section[1]['month_total_tea_made']/$section[1]['area'],2) !!}@else 0 @endif</td>
            <td>@if($section[0]['area'] != 0){!! round($section[0]['todate_total_tea_made']/$section[0]['area'],2) !!}@else 0 @endif</td>
            <td>@if($section[1]['area'] != 0){!! round($section[1]['todate_total_tea_made']/$section[1]['area'],2) !!}@else 0 @endif</td>
            <td> </td>
        </tr>
    @endforeach
        <tr>
            <th>Total</th>
            <th>{!! $total['current']['area'] !!}</th>
            <th>{!! $total['last']['area'] !!}</th>
            <th></th>
            <th></th>
            <th>{!! $total['current']['month_total_plucked_area'] !!}</th>
            <th>{!! $total['last']['month_total_plucked_area'] !!}</th>
            <th>{!! $total['current']['todate_total_plucked_area'] !!}</th>
            <th>{!! $total['last']['todate_total_plucked_area'] !!}</th>
            <th>{!! $total['current']['month_total_round'] !!}</th>
            <th>{!! $total['last']['month_total_round'] !!}</th>
            <th>{!! $total['current']['todate_total_round'] !!}</th>
            <th>{!! $total['last']['todate_total_round'] !!}</th>
            <th>{!! $total['current']['month_total_leaf_plucked'] !!}</th>
            <th>{!! $total['last']['month_total_leaf_plucked'] !!}</th>
            <th>{!! $total['current']['todate_total_leaf_plucked'] !!}</th>
            <th>{!! $total['last']['todate_total_leaf_plucked'] !!}</th>
            <th>@if($total['current']['area'] != 0){!! round($total['current']['month_total_tea_made']/$total['current']['area'],2) !!} @else 0 @endif</th>
            <th>@if($total['last']['area'] != 0){!! round($total['last']['month_total_tea_made']/$total['last']['area'],2) !!}@else 0 @endif</th>
            <th>@if($total['current']['area'] != 0){!! round($total['current']['todate_total_tea_made']/$total['current']['area'],2) !!} @else 0 @endif</th>
            <th>@if($total['last']['area'] != 0){!! round($total['last']['todate_total_tea_made']/$total['last']['area'],2) !!}@else 0 @endif</th>
            <th></th>
        </tr>
    @endif
    </tbody>
</table>
</body>
</html>
