<!DOCTYPE html>
<html>
<head>

</head>


<table>
    <thead><tr colspan="10"><th><h1>Daily Factory Report</h1>
        </th></tr></thead>
    <thead><tr><th colspan="10">Date: {!! $date['date_en'] !!}  Miti: {!! $date['date_np'] !!}</th></tr></thead>
    <thead>
    <tr >
        <th>Title</th>
        <th style="text-align: center;" colspan="2">Current Year</th>
        <th style="text-align: center;" colspan="2">Previous Year</th>
    </tr>
    <tr >
        <th></th>
        <th>Today</th>
        <th>Todate</th>
        <th>Today</th>
        <th>Todate</th>
    </tr></thead>
    <tbody>
    <tr>
        <td>Opening Leaf</td>
        <td colspan="2">@if($green_leaf_opening){!! $green_leaf_opening['current_todate'] !!}@endif</td>
        <td colspan="2">@if($green_leaf_opening){!! $green_leaf_opening['last_todate'] !!}@endif</td>

    </tr>
    <tr>
        <td>Daily Green Leaf</td>
        <td>@if($daily_green_leaf){!! $daily_green_leaf['current_today'] !!}@endif</td>
        <td>@if($daily_green_leaf){!! $daily_green_leaf['current_todate'] !!}@endif</td>
        <td>@if($daily_green_leaf){!! $daily_green_leaf['last_today'] !!}@endif</td>
        <td>@if($daily_green_leaf){!! $daily_green_leaf['last_todate'] !!}@endif</td>
    </tr>
    <tr>
        <td>Bought Green Leaf</td>
        <td>@if($bought_green_leaf){!! $bought_green_leaf['current_today'] !!}@endif</td>
        <td>@if($bought_green_leaf){!! $bought_green_leaf['current_todate'] !!}@endif</td>
        <td>@if($bought_green_leaf){!! $bought_green_leaf['last_today'] !!}@endif</td>
        <td>@if($bought_green_leaf){!! $bought_green_leaf['last_todate'] !!}@endif</td>
    </tr>
    <tr>
        <td>Sister Garden Green Leaf</td>
        <td>@if($sister_green_leaf){!! $sister_green_leaf['current_today'] !!}@endif</td>
        <td>@if($sister_green_leaf){!! $sister_green_leaf['current_todate'] !!}@endif</td>
        <td>@if($sister_green_leaf){!! $sister_green_leaf['last_today'] !!}@endif</td>
        <td>@if($sister_green_leaf){!! $sister_green_leaf['last_todate'] !!}@endif</td>
    </tr>
    <tr>
        <td>Green Leaf Transferred</td>
        <td>@if($green_leaf_transferred){!! $green_leaf_transferred['current_today'] !!}@endif</td>
        <td>@if($green_leaf_transferred){!! $green_leaf_transferred['current_todate'] !!}@endif</td>
        <td>@if($green_leaf_transferred){!! $green_leaf_transferred['last_today'] !!}@endif</td>
        <td>@if($green_leaf_transferred){!! $green_leaf_transferred['last_todate'] !!}@endif</td>
    </tr>
    <tr>
        <td>Green Leaf Processed</td>
        <td>@if($total_green_leaf){!! $total_green_leaf['current_today'] !!}@endif</td>
        <td>@if($total_green_leaf){!! $total_green_leaf['current_todate'] !!}@endif</td>
        <td>@if($total_green_leaf){!! $total_green_leaf['last_today'] !!}@endif</td>
        <td>@if($total_green_leaf){!! $total_green_leaf['last_todate'] !!}@endif</td>
    </tr>
    <tr>
        <td>Tea Made</td>
        <td>@if($tea_made){!! $tea_made['current_today'] !!}@endif</td>
        <td>@if($tea_made){!! $tea_made['current_todate'] !!}@endif</td>
        <td>@if($tea_made){!! $tea_made['last_today'] !!}@endif</td>
        <td>@if($tea_made){!! $tea_made['last_todate'] !!}@endif</td>
    </tr>
    <tr>
        <td>Recovery Percentage</td>
        <td>@if($recovery_percentage){!! $recovery_percentage['current_today'] !!}@endif</td>
        <td>@if($recovery_percentage){!! $recovery_percentage['current_todate'] !!}@endif</td>
        <td>@if($recovery_percentage){!! $recovery_percentage['last_today'] !!}@endif</td>
        <td>@if($recovery_percentage){!! $recovery_percentage['last_todate'] !!}@endif</td>
    </tr>
    <tr>
        <td>Tea Grade Sorting</td>
        <td>@if($tea_grade_sorting){!! $tea_grade_sorting['current_today'] !!}@endif</td>
        <td>@if($tea_grade_sorting){!! $tea_grade_sorting['current_todate'] !!}@endif</td>
        <td>@if($tea_grade_sorting){!! $tea_grade_sorting['last_today'] !!}@endif</td>
        <td>@if($tea_grade_sorting){!! $tea_grade_sorting['last_todate'] !!}@endif</td>
    </tr>
    <tr>
        <td>Tea Pack</td>
        <td>@if($tea_pack){!! $tea_pack['current_today'] !!}@endif</td>
        <td>@if($tea_pack){!! $tea_pack['current_todate'] !!}@endif</td>
        <td>@if($tea_pack){!! $tea_pack['last_today'] !!}@endif</td>
        <td>@if($tea_pack){!! $tea_pack['last_todate'] !!}@endif</td>
    </tr>
    <tr>
        <td>Sample Tea Dispatch</td>
        <td>@if($sample_dispatch){!! $sample_dispatch['current_today'] !!}@endif</td>
        <td>@if($sample_dispatch){!! $sample_dispatch['current_todate'] !!}@endif</td>
        <td>@if($sample_dispatch){!! $sample_dispatch['last_today'] !!}@endif</td>
        <td>@if($sample_dispatch){!! $sample_dispatch['last_todate'] !!}@endif</td>
    </tr>
    <tr>
        <td>Tea Dispatch</td>
        <td>@if($tea_dispatch){!! $tea_dispatch['current_today'] !!}@endif</td>
        <td>@if($tea_dispatch){!! $tea_dispatch['current_todate'] !!}@endif</td>
        <td>@if($tea_dispatch){!! $tea_dispatch['last_today'] !!}@endif</td>
        <td>@if($tea_dispatch){!! $tea_dispatch['last_todate'] !!}@endif</td>
    </tr>
    <tr>
        <td>Loose Stock</td>
        <td>@if($loose_stock){!! $loose_stock['current_today'] !!}@endif</td>
        <td>@if($loose_stock){!! $loose_stock['current_todate'] !!}@endif</td>
        <td>@if($loose_stock){!! $loose_stock['last_today'] !!}@endif</td>
        <td>@if($loose_stock){!! $loose_stock['last_todate'] !!}@endif</td>
    </tr>
    <tr>
        <td>Packed Balance</td>
        <td>@if($packed_balance){!! $packed_balance['current_today'] !!}@endif</td>
        <td>@if($packed_balance){!! $packed_balance['current_todate'] !!}@endif</td>
        <td>@if($packed_balance){!! $packed_balance['last_today'] !!}@endif</td>
        <td>@if($packed_balance){!! $packed_balance['last_todate'] !!}@endif</td>
    </tr>
   <tr>
        <td>CLosing Leaf</td>
        <td colspan="2">@if($green_leaf_closing){!! $green_leaf_closing['current_todate'] !!}@endif</td>
        <td colspan="2">@if($green_leaf_closing){!! $green_leaf_closing['last_todate'] !!}@endif</td>

    </tr>
    <tr>
        <td>Factory Mandys</td>
        <td>@if($factory_mandays){!! $factory_mandays['current_today'] !!}@endif</td>
        <td>@if($factory_mandays){!! $factory_mandays['current_todate'] !!}@endif</td>
        <td>@if($factory_mandays){!! $factory_mandays['last_today'] !!}@endif</td>
        <td>@if($factory_mandays){!! $factory_mandays['last_todate'] !!}@endif</td>
    </tr>
    <tr>
        <td>Electricity Unit Consumption</td>
        <td>@if($electricity_unit_consumption){!! $electricity_unit_consumption['current_today'] !!}@endif</td>
        <td>@if($electricity_unit_consumption){!! $electricity_unit_consumption['current_todate'] !!}@endif</td>
        <td>@if($electricity_unit_consumption){!! $electricity_unit_consumption['last_today'] !!}@endif</td>
        <td>@if($electricity_unit_consumption){!! $electricity_unit_consumption['last_todate'] !!}@endif</td>
    </tr>
    <tr>
        <td>Genset HSD Consumption</td>
        <td>@if($genset_log){!! $genset_log['current_today'] !!}@endif</td>
        <td>@if($genset_log){!! $genset_log['current_todate'] !!}@endif</td>
        <td>@if($genset_log){!! $genset_log['last_today'] !!}@endif</td>
        <td>@if($genset_log){!! $genset_log['last_todate'] !!}@endif</td>
    </tr>
   @if($fuel_consumption_log != null)
       @foreach($fuel_consumption_log as $key=>$fuel_consumption)
    <tr>
        <td>{!! $key.' Consumption' !!}</td>
        <td>@if(array_key_exists('current_today',$fuel_consumption)){!! $fuel_consumption['current_today'] !!}@endif</td>
        <td>@if(array_key_exists('current_todate',$fuel_consumption)){!! $fuel_consumption['current_todate'] !!}@endif</td>
        <td>@if(array_key_exists('last_today',$fuel_consumption)){!! $fuel_consumption['last_today'] !!}@endif</td>
        <td>@if(array_key_exists('last_todate',$fuel_consumption)){!! $fuel_consumption['last_todate'] !!}@endif</td>
    </tr>
        @endforeach
    @endif
    <tr style="background-color: #9d9d9d;font-weight: bold;"><td colspan="5" style="text-align: center;">Factory Material Consumptions</td></tr>
    <tr style="font-weight: bold;"><td colspan="2">Item Name</td><td>Quantity</td><td>Unit</td><td>Amount(Rs.)</td></tr>
    @foreach($material_issued_items as $material_issued)
        <tr>
            <td colspan="2">{!! reset($material_issued)['item']['name'] !!}</td>
            <td>{!! array_sum(array_column($material_issued,'quantity')) !!}</td>
            <td>{!! reset($material_issued)['item']['unit']['name'] !!}</td>
            <td>{!! array_sum(array_column($material_issued,'value')) !!}</td>
        </tr>
        @endforeach

    <tr></tr>
    @if($factory_wages)
    <tr style="background-color: #9d9d9d;"><td colspan="3" style="text-align: center;font-weight:bold;">Wages Cost</td></tr>
    <tr style="font-weight: bold;"><td>Particulars</td><td>Today Cost</td><td>To-Date Cost</td></tr>
    <tr><td>Basic Pay</td><td>{!! $factory_wages['basic_pay']['current_today'] !!}</td><td>{!! $factory_wages['basic_pay']['current_todate'] !!}</td></tr>
    <tr><td>Ot Wages</td><td>{!! $factory_wages['ot_wages']['current_today'] !!}</td><td>{!! $factory_wages['ot_wages']['current_todate'] !!}</td></tr>
    <tr><td>Task Deduction</td><td>{!! $factory_wages['task_deduction']['current_today'] !!}</td><td>{!! $factory_wages['task_deduction']['current_todate'] !!}</td></tr>
    <tr><td>Earnings</td><td>{!! $factory_wages['earnings']['current_today'] !!}</td><td>{!! $factory_wages['earnings']['current_todate'] !!}</td></tr>
    <tr><td>Deductions</td><td>{!! $factory_wages['deductions']['current_today'] !!}</td><td>{!! $factory_wages['deductions']['current_todate'] !!}</td></tr>
    <tr><td>PF Worker</td><td>{!! round($factory_wages['pf_worker']['current_today'],2) !!}</td><td>{!! round($factory_wages['pf_worker']['current_todate'],2) !!}</td></tr>
    <tr><td>PF Employer</td><td>{!! round($factory_wages['pf_employer']['current_today'],2) !!}</td><td>{!! round($factory_wages['pf_employer']['current_todate'],2) !!}</td></tr>
    <tr style="font-weight: 700;"><td>Total</td>
        <td>{!! $total_wages_cost_today!!}</td>
        <td>{!! $total_wages_cost_todate!!}</td>
    </tr>
    @endif
    <tr></tr>
    <tr style="font-weight: bold;background-color: #9d9d9d;"><td colspan="2">Power Cost</td></tr>
    <tr ><td colspan="2" style="text-align: center;font-weight:bold;">Grid Cost</td></tr>
    <tr><td>Today</td> <td>{!! $grid_cost['current_today'] !!}</td></tr>
    <tr><td>Todate</td><td>{!! $grid_cost['current_todate'] !!}</td></tr>
    <tr ><td colspan="2" style="text-align: center;font-weight:bold;">HSD Cost</td></tr>
    <tr><td>Today</td> <td>{!! $hsd_cost['current_today'] !!}</td></tr>
    <tr><td>Todate</td><td>{!! $hsd_cost['current_todate'] !!}</td></tr>

    <tr></tr>

    <tr style="font-weight: bold;background-color: #9d9d9d;"><td colspan="2" style="text-align: center;font-weight:bold;">Fuel Cost</td></tr>
    <tr><td>Today</td><td>{!! $fuel_cost['current_today'] !!}</td></tr>
    <tr><td>Todate</td><td>{!! $fuel_cost['current_todate'] !!}</td></tr>

    <tr></tr>

    <tr style="font-weight: bold;background-color: #9d9d9d;"><td colspan="2" style="text-align: center;font-weight:bold;">Material Cost</td></tr>
    <tr><td>Today</td><td>{!! $packing_cost['current_today'] !!}</td></tr>
    <tr><td>Todate</td><td>{!! $packing_cost['current_todate'] !!}</td></tr>

    <tr></tr>

    <tr style="font-weight: bold;background-color: #9d9d9d;"><td colspan="3" style="text-align: center;font-weight:bold;">Cost per Kg.</td></tr>
    <tr style="font-weight: bold;"><td>Particulars</td><td>Today</td><td>Todate</td></tr>
    <tr><td>Wages per Kg</td><td>{!! $wages_cost_per_kg['current_today'] !!}</td><td>{!! $wages_cost_per_kg['current_todate'] !!}</td></tr>
    <tr><td>Material Consumed Cost per Kg</td><td>{!! $packing_cost_per_kg['current_today'] !!}</td><td>{!! $packing_cost_per_kg['current_todate'] !!}</td></tr>
    <tr><td>Fuel Cost per Kg</td><td>{!! $fuel_cost_per_kg['current_today'] !!}</td><td>{!! $fuel_cost_per_kg['current_todate'] !!}</td></tr>
    <tr><td>Power per Kg</td><td>{!! $power_cost_per_kg['current_today'] !!}</td><td>{!! $power_cost_per_kg['current_todate'] !!}</td></tr>
    </tbody>
</table>
</body>
</html>
