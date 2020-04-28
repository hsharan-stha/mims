<!DOCTYPE html>
<html>
<head>

</head>

<table>
    <thead><tr colspan="5" style="text-align: center"><th><h1>Green Leaf Report</h1>
        </th></tr></thead>
    <thead><tr colspan="5"><th>Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
    <thead><tr colspan="5"><th>Date To : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>
    <tbody>
    <tr>
        <th style="text-align: center" colspan="5">Own Garden Leaf</th>
    </tr>
    <tr style="background-color: #9d9d9d">
        <td>Head</td>
        <td>This Period</td>
        <td>Fine %</td>
        <td>Fine Leaf</td>
        <td>Todate</td>
    </tr>
    <tr>
        <td>Tokla G/Leaf</td>
        <td>{!! $gardenDailyLeaf['today_green_leaf'] !!}</td>
        <td>{!! $gardenDailyLeaf['average_fine_percentage'] !!}</td>
        <td>{!! $gardenDailyLeaf['today_green_leaf']*$gardenDailyLeaf['average_fine_percentage']*0.01 !!}</td>
        <td>{!! $gardenDailyLeaf['todate_green_leaf'] !!}</td>
    </tr>
    <tr>
        <td>Plucker Mandays</td>
        <td>{!! $gardenDailyLeaf['today_plucking_mandays'] !!}</td>
        <td></td>
        <td></td>
        <td>{!! $gardenDailyLeaf['todate_plucking_mandays'] !!}</td>
    </tr>
    <tr>
        <td>Area Covered</td>
        <td>{!! $gardenDailyLeaf['today_area_covered'] !!}</td>
        <td></td>
        <td></td>
        <td>{!! $gardenDailyLeaf['todate_area_covered'] !!}</td>
    </tr>
    <tr>
        <td>Rain Fall</td>
        <td>{!! $gardenDailyLeaf['today_rainfall'] !!}</td>
        <td></td>
        <td></td>
        <td>{!! $gardenDailyLeaf['todate_rainfall'] !!}</td>
    </tr>
    <tr></tr>
    <tr><th style="text-align: center" colspan="5"> Sister Garden Leaf</th></tr>
    <tr style="background-color: #9d9d9d;">
        <td>Gardens</td>
        <td>This Period</td>
        <td>Fine %</td>
        <td>Fine Leaf</td>
        <td>Todate</td>
    </tr>
    <?php $period_sister_garden_leaf=$todate_sister_garden_leaf=$sister_fine_percentage=0;?>
    @if($sister_garden_leaf)
    @foreach($sister_garden_leaf as $key=>$garden_leaf)
    <tr>
        <td>{!! $key !!}</td>
        <td>{!! $garden_leaf['period'] !!}</td>
        <td>{!! $garden_leaf['fine_percentage'] !!}</td>
        <td>{!! $garden_leaf['fine_leaf'] !!}</td>
        <td>{!! $garden_leaf['todate'] !!}</td>
        <?php $period_sister_garden_leaf= $period_sister_garden_leaf+$garden_leaf['period']?>
        <?php $todate_sister_garden_leaf= $todate_sister_garden_leaf+$garden_leaf['todate']?>
        <?php $sister_fine_percentage= $sister_fine_percentage+$garden_leaf['fine_percentage']?>
    </tr>
    @endforeach
    @endif
    <tr></tr>
    <tr><th style="text-align: center" colspan="5"> Bought Leaf</th></tr>
    <tr style="background-color: #9d9d9d;">
        <td>Name of Suppliers</td>
        <td>This Period</td>
        <td>Fine %</td>
        <td>Fine Leaf</td>
        <td>Todate</td>
    </tr>
    <?php $period_bought_leaf=$todate_bought_leaf=$bought_fine_percentage=0;?>
    @if($bought_leaf)
    @foreach($bought_leaf as $key=>$leaf)
    <tr>
        <td>{!! $key !!}</td>
        <td>{!! $leaf['period'] !!}</td>
        <td>{!! $leaf['fine_percentage'] !!}</td>
        <td>{!! $leaf['fine_leaf'] !!}</td>
        <td>{!! $leaf['todate'] !!}</td>
        <?php $period_bought_leaf= $period_bought_leaf+$leaf['period']?>
        <?php $todate_bought_leaf= $todate_bought_leaf+$leaf['todate']?>
        <?php $bought_fine_percentage= $bought_fine_percentage+$leaf['fine_percentage']?>
    </tr>
    @endforeach
    @endif
    <tr></tr>
    <tr style="background-color: #9d9d9d;"><td style="text-align: center" colspan="5"> SubTotal</td> </tr>
    @if($sister_garden_leaf)
    <tr>
        <td>Sister Garden</td>
        <td>{!! $period_sister_garden_leaf !!}</td>
        <td>@if(count($sister_garden_leaf) != 0){!! $sister_fine_percentage/count($sister_garden_leaf) !!}@else 0 @endif</td>
        <td>@if(count($sister_garden_leaf) != 0){!! $period_sister_garden_leaf*($sister_fine_percentage/count($sister_garden_leaf))*0.01 !!} @else 0 @endif</td>
        <td>{!! $todate_sister_garden_leaf !!}</td>
    </tr>
    @endif
    @if($bought_leaf)
    <tr>
        <td>Bought Leaf</td>
        <td>{!! $period_bought_leaf !!}</td>
        <td> @if(count($bought_leaf) != 0){!! $bought_fine_percentage/count($bought_leaf) !!} @else 0 @endif</td>
        <td>@if(count($bought_leaf) != 0){!! $period_bought_leaf*($bought_fine_percentage/count($bought_leaf))*0.01 !!} @else 0 @endif</td>
        <td>{!! $todate_bought_leaf !!}</td>
    </tr>
    @endif
    <?php $period_leaf_transfer=$todate_leaf_transfer=0;?>
    @if($green_leaf_transfer)
    @foreach($green_leaf_transfer as $key=>$leaf_transfer)
        <tr>
            <td>{!! 'Transfer To-'.$key !!}</td>
            <td>{!! $leaf_transfer['period'] !!}</td>
            <td>{!! $leaf_transfer['fine_percentage'] !!}</td>
            <td>{!! $leaf_transfer['fine_leaf'] !!}</td>
            <td>{!! $leaf_transfer['todate'] !!}</td>
            <?php $period_leaf_transfer= $period_leaf_transfer+$leaf_transfer['period']?>
            <?php $todate_leaf_transfer= $todate_leaf_transfer+$leaf_transfer['todate']?>
        </tr>
        @endforeach
    @endif
    <tr>
        <td>BALANCE LEAF</td>
        <td>{!! $gardenDailyLeaf['today_green_leaf']+ $period_bought_leaf+ $period_sister_garden_leaf-$period_leaf_transfer !!}</td>
        <td></td>
        <td></td>
        <td>{!! $gardenDailyLeaf['todate_green_leaf']+ $todate_bought_leaf+ $todate_sister_garden_leaf-$todate_leaf_transfer !!} </td>
    </tr>
    <tr></tr>
    <tr><td style="background-color: #9d9d9d;text-align: center;" colspan="3"> Sectionwise Pluckings</td></tr>
    <tr>
        <td>Section No</td>
        <td>Period Area Plucked</td>
        <td>Round Days</td>
    </tr>
    @if($section_wise_pluckings)
        <?php $area_plucked=0;?>
    @foreach($section_wise_pluckings as $key=>$section_wise_plucking)
    <tr>
        <td>{!! $key !!}</td>
        <td>{!! $section_wise_plucking['area'] !!}</td>
        <td>{!! $section_wise_plucking['round'] !!}</td>
        <?php $area_plucked = $area_plucked + $section_wise_plucking['area']?>
    </tr>
    @endforeach
    <tr>
        <td>Total</td>
        <td>{!! $area_plucked !!}</td>
        <td></td>
    </tr>
    @endif
    </tbody>
</table>
</body>
</html>
