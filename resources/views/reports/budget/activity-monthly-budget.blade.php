<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
        <tr colspan="17">
            <th><h1>Activity Monthly Budget Report</h1></th>
        </tr>
    </thead>
    <thead>
        <tr>
            <th>S.N</th>
            <th>Fiscal Year</th>
        </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    @foreach($allActivityEstimation as $allActivity)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $allActivity->fiscalYear['name'] !!}</td>
            <td>
            <table>
                <thead>
                @if($i==1)
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Jan</th>
                        <th>Feb</th>
                        <th>March</th>
                        <th>April</th>
                        <th>May</th>
                        <th>June</th>
                        <th>July</th>  
                        <th>Aug</th>
                        <th>Sept</th>
                        <th>Oct</th> 
                        <th>Nov</th> 
                        <th>Dec</th> 
                        <th>Total</th>                          
                    </tr>
                    @else
                    <tr>
                    </tr>
                    @endif
                </thead>
                    <tbody>
                    @foreach($allActivity->activityMonthlyBudgetDetails as $item)
                        <tr>
                            <td> {!! $item->activity['code'] !!}</td>
                            <td> {!! $item->activity['name'] !!}</td>
                            <td> {!! $item->jan !!}</td>
                            <td> {!! $item->feb !!}</td>
                            <td> {!! $item->mar !!}</td>
                            <td> {!! $item->apr !!}</td>
                            <td> {!! $item->may !!}</td>
                            <td> {!! $item->jun !!}</td>
                            <td> {!! $item->jul !!}</td>
                            <td> {!! $item->aug !!}</td>
                            <td> {!! $item->sep !!}</td>
                            <td> {!! $item->oct !!}</td>
                            <td> {!! $item->nov !!}</td>
                            <td> {!! $item->decem !!}</td>
                            <td> {!! $item->total !!}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </td>
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