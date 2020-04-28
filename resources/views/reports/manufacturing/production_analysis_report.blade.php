<!DOCTYPE html>
<html>
<head>

</head>


<table>
    <thead><tr colspan="10"><th><h1>Production Analysis Report</h1>
        </th></tr></thead>
    <thead><tr colspan="10"><th>Date From: {!! $date['date_from_en'] !!}  Date To: {!! $date['date_to_en'] !!}</th></tr></thead>
    <thead><tr colspan="10"><th>Miti From: {!! $date['date_from_np'] !!}  Miti To: {!! $date['date_to_np'] !!}</th></tr></thead>
    <thead>
    <tr >
        <th>Tea Made</th>
        <th>Tea Grade</th>
        <th style="text-align: center;" colspan="3">Sorted</th>
        <th style="text-align: center;" colspan="3"> Packed</th>
        <th style="text-align: center;" colspan="3"> Dispatched</th>
        <th> Closing Stock</th>
    </tr>
    <tr >
        <th></th>
        <th></th>
        <th> Opening Balance</th>
        <th> Between Dt.</th>
        <th> Todate</th>
        <th> Opening Balance</th>
        <th> Between Dt.</th>
        <th> Todate</th>
        <th> Opening Balance</th>
        <th> Between Dt.</th>
        <th> Todate</th>
        <th> Todate</th>
    </tr></thead>
    <tbody>
    <?php $teaGradeSortingOpening=$teaGradeSortingCurrent
        =$teaGradeSortingClosing=$teaPackOpening=$teaPackClosing=$teaPackCurrent
        =$teaDispatchCurrent=$teaDispatchOpening=$teaDispatchClosing=0?>
    @foreach($teaGradeLogs as $teaGradeLog)
    <tr>
        <td></td>
        <td>{!! $teaGradeLog['name'] !!}</td>
        <td> {!!$teaGradeLog['sorted']['opening'] !!}</td>
        <?php $teaGradeSortingOpening=$teaGradeSortingOpening+$teaGradeLog['sorted']['opening'];?>
        <td>{!! $teaGradeLog['sorted']['current'] !!}</td>
        <?php $teaGradeSortingCurrent=$teaGradeSortingCurrent+$teaGradeLog['sorted']['current'];?>
        <td>{!! $teaGradeLog['sorted']['opening']+$teaGradeLog['sorted']['current'] !!}</td>
        <?php $teaGradeSortingClosing=$teaGradeSortingClosing+$teaGradeLog['sorted']['opening']+$teaGradeLog['sorted']['current'];?>
        <td>{!!$teaGradeLog['tea_pack']['opening'] !!}</td>
        <?php $teaPackOpening=$teaPackCurrent+$teaGradeLog['tea_pack']['opening'];?>
        <td>{!! $teaGradeLog['tea_pack']['current'] !!}</td>
        <?php $teaPackCurrent=$teaPackCurrent+$teaGradeLog['tea_pack']['current'];?>
        <td>{!! $teaGradeLog['tea_pack']['opening']+$teaGradeLog['tea_pack']['current'] !!}</td>
        <?php $teaPackClosing=$teaPackClosing+$teaGradeLog['tea_pack']['opening']+$teaGradeLog['tea_pack']['current'];?>
        <td>{!!$teaGradeLog['tea_dispatch']['opening'] !!}</td>
        <?php $teaDisptachOpening=$teaDispatchOpening+$teaGradeLog['tea_dispatch']['opening'];?>
        <td>{!! $teaGradeLog['tea_dispatch']['current'] !!}</td>
        <?php $teaDispatchCurrent=$teaDispatchCurrent+$teaGradeLog['tea_dispatch']['current'];?>
        <td>{!! $teaGradeLog['tea_dispatch']['opening']+$teaGradeLog['tea_dispatch']['current'] !!}</td>
        <?php $teaDispatchClosing=$teaDispatchClosing+$teaGradeLog['tea_dispatch']['opening']+$teaGradeLog['tea_dispatch']['current'];?>
    </tr>
    @endforeach
    <tr style="border-top: 1px solid #000000;font-weight:bold;">
        <td>Total</td>
        <td></td>
        <td>{!! $teaGradeSortingOpening !!}</td>
        <td>{!! $teaGradeSortingCurrent !!}</td>
        <td>{!! $teaGradeSortingClosing !!}</td>
        <td>{!! $teaPackOpening !!}</td>
        <td>{!! $teaPackCurrent !!}</td>
        <td>{!! $teaPackClosing !!}</td>
        <td>{!! $teaDispatchOpening !!}</td>
        <td>{!! $teaDispatchCurrent !!}</td>
        <td>{!! $teaDispatchClosing !!}</td>
        <td></td>
    </tr>
    </tbody>
</table>
</body>
</html>
