<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\GardenDailyLeafRepository;
use App\Validators\GardenDailyLeafValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;


class GardenDailyLeafController extends ApiBaseController
{
    protected $gardenDailyLeafRepository;

    protected $gardenDailyLeafValidator;

    public function __construct(GardenDailyLeafRepository $gardenDailyLeafRepository,
                                GardenDailyLeafValidator $gardenDailyLeafValidator){
        $this->gardenDailyLeafRepository = $gardenDailyLeafRepository;
        $this->gardenDailyLeafValidator = $gardenDailyLeafValidator;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try{
            $limit=$request->limit != null ? $request->limit: 20;
            $weight_date ='*';
            $section_id = '*';
            $fine_percentage ='*';
            if($request->filterGroups){
                foreach($request->filterGroups as $filterGroup){
                    if($filterGroup['field'] == 'section_name'){
                        $section_id = $filterGroup['filters'][0]['value'];
                    }elseif($filterGroup['field'] == 'fine_percentage'){
                        $fine_percentage = ['fine_percentage','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }
                    elseif($filterGroup['field'] == 'weight_date'){
                        $date_from = \DateTime::createFromFormat('D M d Y H:i:s e+', $filterGroup['filters'][0]['value'])->format('Y-m-d 00:00:00');
                        $date_to = \DateTime::createFromFormat('D M d Y H:i:s e+', $filterGroup['filters'][1]['value'])->format('Y-m-d 23:59:59');
                        $weight_date = [$date_from,'<>',$date_to];
                    }else{

                    }
                }
            }
            $allGardenDailyLeaf=$this->gardenDailyLeafRepository->with(['section'])->findWhere(['weight_date'=>$weight_date,'section_id'=>$section_id,'fine_percentage'=>$fine_percentage,'paginate'=>$limit]);
            if($request->report == 'report'){
                $i = 0;
                $data['allGardenDailyLeaf']= $allGardenDailyLeaf;
                Excel::create('KamjariReport', function ($excel) use ($data) {
                    $excel->setTitle('Kamjari Report');
                    $excel->setCreator('Phoenix Solutions')
                        ->setCompany('Phoenix Solutions');
                    $excel->setDescription('Kamjari Report');
                    $excel->sheet('First sheet', function ($sheet) use ($data) {
                        $sheet->loadView('reports.manufacturing.garden_daily_leaf', $data);
                    });

                })->export('xls');
            }
            if($allGardenDailyLeaf->first() == null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allGardenDailyLeaf->toArray());
        }catch(\Exception $e){
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
        try{
            try{
                $inputs['user_id']=1;
                $inputs['estate_id']=1;
                $request->merge($inputs);
                $this->gardenDailyLeafValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $this->gardenDailyLeafRepository->create($request->all());
                return $this->respondWithMessage('Garden Daily Leaf Created Successfully!!!', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
            return $this->respondWithError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            $garden=$this->gardenDailyLeafRepository->with(['division'])->findWhere(['id'=>$id]);
            if($garden->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $garden->first());
        }catch(\Exception $e){
            return $this->respondWithError($e->getMessage());
        }
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
        try{
            try{
                $this->gardenDailyLeafValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->gardenDailyLeafRepository->update($request->all(), $id);
                return $this->respondWithMessage('Record Updated Successfully', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
            return $this->respondWithError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
        $data['id']= $id;
        $this->gardenDailyLeafRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
