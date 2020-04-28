<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;


class ApiBaseController extends Controller

{

    public function __construct()
    {

    }

    public function dateConverterEToN($date){
        $dateConverter = new DateConverter();
        return $dateConverter->eng_to_nep_date($date);
    }

    public function dateConverterNToE($date){
        $dateConverter = new DateConverter();
        return $dateConverter->nep_to_eng_date($date);
    }
    /**
     * @var int
     */
    protected $statusCode = 200;

    /**
     * @return mixed
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }

    /**
     * @param mixed $statusCode
     */
    public function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;
        return $this;
    }

    /**
     * @param string $message
     * @return mixed
     */
    public function respondNotFound($message = 'Data Not Found!')
    {
        return $this->setStatusCode(404)->respondWithError($message,404);
    }

    public function respondValidationError($message = 'Bad Input.Try Again!')
    {
        return $this->setStatusCode(400)->respondWithError($message);
    }
    /**
     * @param string $message
     * @return mixeds
     */
    public function respondInternalError($message = 'Internal Error!')
    {
        return $this->setStatusCode(500)->respondWithError($message);
    }

    /**
     * @param $message
     * @return mixeds
     */
    public function respondWithError($message,$status_code=500)
    {
        return $this->respond([
            'error' => [
                'message' => $message,
                'status_code' => $status_code,
            ]
        ]);

    }

    /**
     * @param $data
     * @param array $headers
     * @return mixed
     */
    public function respond(
        $data,
        $headers = []
    ) {
        return response()->json($data, $this->getStatusCode(), $headers);
    }

    /**
     * @param $message
     * @param $data
     * @param $statusCode
     * @return \Illuminate\Http\JsonResponse
     * Response message when validation is true.
     */
    Public function respondWithMessage($message, $data)
    {
        return $this->respond([
            'message' => $message,
            'data'=>$data,
        ]);
    }

    Public function getSlug($string)
    {
        $slug = preg_replace('/[^A-Za-z0-9-]+/', '-', $string);
        return $slug;
    }

    public function getCurrentEstateId(Request $request)
    {
        if (\Auth::user() != null) {
        return $request->auth_user_estate_id;
        }
        return null;
    }

}