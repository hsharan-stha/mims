<?php

namespace App\Http\Controllers;


use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use View;
use JWTAuth;
use Illuminate\Cookie\CookieJar;



class FrontController extends Controller
{
    

    public function __construct(
    ) {
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return "Tea Factory Management Information System";
    }

    public function frontEnd(Request $request)
    {
        return \File::get(public_path() . '\frontend\index.html');
    }

    
}
