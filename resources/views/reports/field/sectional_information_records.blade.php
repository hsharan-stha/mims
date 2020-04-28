<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
        <tr colspan="35">
            <th><h1>Sectional Information Records</h1></th>
        </tr>
    </thead>
    <thead><tr ><th colspan="35">Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
    <thead><tr ><th colspan="35">Date To: {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>

    <thead>
        <tr >
            <th>S.N</th>
            <th>Date</th>
            <th>Section</th>
            <th>Bush Variety</th>
            <th>Bush Type</th>
            <th>Prune Style</th>
            <th>Bush Per Hector</th>
            <th>Area</th>
            <th>Area Under Tea</th>
            <th>Replanted Area</th>
            <th>Elevation</th>
            <th>PH Value</th>
            <th>Round</th>
            <th>Bush No</th>
            <th>Bush Density</th>
            <th>No of Irrigated Time</th>
            <th>Last Irrigated</th>
            <th>Drainage Type</th>
            <th>Drain Depth</th>
            <th>Drain Status</th>
            <th>Nitrogen</th>
            <th>Potassium</th>
            <th>Split NPK</th>
            <th>Phosphate</th>
            <th>Spacing of Bushes</th>
            <th>Split 2 NPK</th>
            <th>Area Covered By Old Tea</th>
            <th>Area Covered by young Tea</th>
            <th>Uprooted Area</th>
            <th>Rejuvenated Area</th>
            <th>Rejuvenation</th>
            <th>Pests</th>
            <th>Diseases</th>
            <th>Others</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allSections as $history)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! date('Y-m-d',strtotime($history->date)) !!}</td>
            <td> {!! $history->section['name'] !!}</td>
            <td> {!! $history->bushVariety['name'] !!}</td>
            <td> {!! $history->bushType['name'] !!}</td>
            <td> {!! $history->pruneStyle['name'] !!}</td>
            <td> {!! $history->bush_per_hector !!}</td>
            <td> {!! $history->area !!}</td>
            <td> {!! $history->area_under_tea !!}</td>
            <td> {!! $history->replanted_area !!}</td>
            <td> {!! $history->elevation !!}</td>
            <td> {!! $history->ph_value !!}</td>
            <td> {!! $history->round !!}</td>
            <td> {!! $history->bush_no !!}</td>
            <td> {!! $history->bush_density !!}</td>
            <td> {!! $history->no_of_irrigated_time !!}</td>
            <td> {!! $history->last_irrigated !!}</td>
            <td> {!! $history->drainage_type !!}</td>
            <td> {!! $history->drain_depth !!}</td>
            <td> {!! $history->drain_status !!}</td>
            <td> {!! $history->Nitrogen !!}</td>
            <td> {!! $history->Potassium !!}</td>
            <td> {!! $history->split_npk !!}</td>
            <td> {!! $history->phosphate !!}</td>
            <td> {!! $history->spacing_of_bushes !!}</td>
            <td> {!! $history->split2_npk !!}</td>
            <td> {!! $history->area_covered_by_old_tea !!}</td>
            <td> {!! $history->area_covered_by_young_tea !!}</td>
            <td> {!! $history->uprooted_area !!}</td>
            <td> {!! $history->rejuvenated_area !!}</td>
            <td> {!! $history->rejuvenation !!}</td>
            <td> {!! $history->pests !!}</td>
            <td> {!! $history->diseases !!}</td>
            <td> {!! $history->others !!}</td>
            <td> {!! $history->remarks !!}</td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>
<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 12/21/2017
 * Time: 10:19 PM
 */