<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\TeaDispatchDetailsRepository;
use App\Repositories\TeaGradeRepository;
use App\Repositories\TeaGradeSortingRepository;
use App\Repositories\TeaPackRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Excel;

class ProductAnalysisReportController extends ApiBaseController
{
    protected $teaGradeSortingRepository;

    protected $teaPackRepository;

    protected $teaDispatchDetailsRepository;

    protected $teaGradeRepository;

    public function __construct(TeaGradeSortingRepository $teaGradeSortingRepository,
                                TeaPackRepository $teaPackRepository,
                                TeaDispatchDetailsRepository $teaDispatchDetailsRepository,
                                TeaGradeRepository $teaGradeRepository)
    {
        $this->teaDispatchDetailsRepository = $teaDispatchDetailsRepository;
        $this->teaGradeSortingRepository= $teaGradeSortingRepository;
        $this->teaPackRepository= $teaPackRepository;
        $this->teaGradeRepository= $teaGradeRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $estate_id = 1;
            if ($request->date_from == null && $request->date_from == '') {
                return $this->respondWithError('Please enter date');
            } else {
                $date_from = $request->date_from;
            }
            if ($request->date_to == null && $request->date_to == '') {
                return $this->respondWithError('Please enter date');
            } else {
                $date_to = $request->date_to;
            }
            $todate_from = '2017-01-01';
            $data['date']['date_from_en'] = $date_from;
            $data['date']['date_from_np'] = $this->dateConverterEToN($date_from);
            $data['date']['date_to_en'] = $date_to;
            $data['date']['date_to_np'] = $this->dateConverterEToN($date_to);
            if ($request->report_type == 'production_analysis_report') {
                $teaGradeSortings = $this->teaGradeSortingRepository->findWhere(['sort_date' => [$todate_from, '<>', $date_to], 'estate_id' => $estate_id]);
                $teaDispatchDetails = $this->teaDispatchDetailsRepository->findWhere(['date' => [$todate_from, '<>', $date_to]]);
                $teaPackDetails = $this->teaPackRepository->findWhere(['pack_date' => [$todate_from, '<>', $date_to], 'estate_id' => $estate_id]);
                $teaGrades = $this->teaGradeRepository->findWhere(['estate_id' => $estate_id]);
                if ($teaGrades->first() == null) {
                    return $this->respondNotFound();
                }
                foreach ($teaGrades as $teaGrade) {
                    $data['teaGradeLogs'][$teaGrade->id]['name'] = $teaGrade->name;
                    $data['teaGradeLogs'][$teaGrade->id]['sorted']['opening'] = $teaGradeSortings->filter(function ($item) use ($todate_from, $date_from, $teaGrade) {
                        if ($item->sort_date >= $todate_from && $item->sort_date < $date_from && $item->tea_grade_id == $teaGrade->id) {
                            return $item;
                        }
                    })->sum('total_sorted_gross');
                    $data['teaGradeLogs'][$teaGrade->id]['sorted']['current'] = $teaGradeSortings->filter(function ($item) use ($date_from, $date_to, $teaGrade) {
                        if ($item->sort_date >= $date_from && $item->sort_date <= $date_to && $item->tea_grade_id == $teaGrade->id) {
                            return $item;
                        }
                    })->sum('total_sorted_gross');
                    $data['teaGradeLogs'][$teaGrade->id]['tea_pack']['opening'] = $teaPackDetails->filter(function ($item) use ($todate_from, $date_from, $teaGrade) {
                        if ($item->pack_date >= $todate_from && $item->pack_date <= $date_from && $item->tea_grade_id == $teaGrade->id) {
                            return $item;
                        }
                    })->sum('total_qty');
                    $data['teaGradeLogs'][$teaGrade->id]['tea_pack']['current'] = $teaPackDetails->filter(function ($item) use ($date_from, $date_to, $teaGrade) {
                        if ($item->pack_date >= $date_from && $item->pack_date <= $date_to && $item->tea_grade_id == $teaGrade->id) {
                            return $item;
                        }
                    })->sum('total_qty');
                    $data['teaGradeLogs'][$teaGrade->id]['tea_dispatch']['opening'] = $teaDispatchDetails->filter(function ($item) use ($todate_from, $date_from, $teaGrade) {
                        if ($item->date >= $todate_from && $item->date <= $date_from && $item->tea_grade_id == $teaGrade->id) {
                            return $item;
                        }
                    })->sum('total_qty');
                    $data['teaGradeLogs'][$teaGrade->id]['tea_dispatch']['current'] = $teaDispatchDetails->filter(function ($item) use ($date_from, $date_to, $teaGrade) {
                        if ($item->date >= $date_from && $item->date <= $date_to && $item->tea_grade_id == $teaGrade->id) {
                            return $item;
                        }
                    })->sum('total_qty');
                }

                Excel::create('Production Analysis Report', function ($excel) use ($data) {
                    $excel->setTitle('Production Report');
                    $excel->setCreator('Phoenix Solutions')
                        ->setCompany('Phoenix Solutions');
                    $excel->setDescription('Production Report');
                    $excel->sheet('First sheet', function ($sheet) use ($data) {
                        $sheet->loadView('reports.manufacturing.production_analysis_report', $data);

                    });

                })->export('xls');
            } elseif ($request->report_type == 'tea_grade_sorting') {
                $teaGradeSortings = $this->teaGradeSortingRepository->findWhere(['sort_date' => [$todate_from, '<>', $date_to], 'estate_id' => $estate_id]);
                $teaGrades = $this->teaGradeRepository->findWhere(['estate_id' => $estate_id]);
                if ($teaGrades->first() == null) {
                    return $this->respondNotFound();
                }
                foreach ($teaGrades as $teaGrade) {
                    $data['teaGradeLogs'][$teaGrade->id]['name'] = $teaGrade->name;
                    $data['teaGradeLogs'][$teaGrade->id]['sorted']['opening'] = $teaGradeSortings->filter(function ($item) use ($todate_from, $date_from, $teaGrade) {
                        if ($item->sort_date >= $todate_from && $item->sort_date < $date_from && $item->tea_grade_id == $teaGrade->id) {
                            return $item;
                        }
                    })->sum('total_sorted_gross');
                    $data['teaGradeLogs'][$teaGrade->id]['sorted']['current'] = $teaGradeSortings->filter(function ($item) use ($date_from, $date_to, $teaGrade) {
                        if ($item->sort_date >= $date_from && $item->sort_date <= $date_to && $item->tea_grade_id == $teaGrade->id) {
                            return $item;
                        }
                    })->sum('total_sorted_gross');
                }
                Excel::create('Tea Grade Report', function ($excel) use ($data) {
                    $excel->setTitle('Tea Grade Soring Report');
                    $excel->setCreator('Phoenix Solutions')
                        ->setCompany('Phoenix Solutions');
                    $excel->setDescription('Tea Grade Sorting Report');
                    $excel->sheet('First sheet', function ($sheet) use ($data) {
                        $sheet->loadView('reports.manufacturing.tea_grade_sorting_report', $data);

                    });

                })->export('xls');
            } else {
                return $this->respondWithError("Report Type not found");
            }
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
