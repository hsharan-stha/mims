<?php

namespace App\Http\Controllers\Auth;

use App\Repositories\UserRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;

use Auth;

class AuthenticateController extends Controller
{

    /**
     * @var UserRepository
     */
    protected $userRepository;


    /**
     * AuthenticateController constructor.
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        // Apply the jwt.auth middleware to all methods in this controller
        // except for the authenticate method. We don't want to prevent
        // the user from retrieving their token if they don't already have it
        $this->middleware('jwt.auth', ['except' => ['authenticate']]);
        $this->userRepository = $userRepository;
    }

    /**
     * Authenticate the user request
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->only('username', 'password');
        try {
            // verify the credentials and create a token for the user
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        if (isset($token) && !empty($token)) {

            JWTAuth::setToken($token);
        }
        try{
            $user_estate = $this->userRepository->with(['estates'])->find(Auth::user()->id)->estates()->lists('id')->toArray();
            if(in_array($request->estate,$user_estate)){
                // if no errors are encountered we can return a JWT
                //if users belongs to estate then only return token
                return response()->json(compact('token'));
            }else{
                return response()->json(['error' => 'User does not belongs to Estate'], 401);
            }
        }catch (\Exception $e){
            return response()->json(['error' => 'invalid_credentials'], 401);
        }


    }

    public function index(Request $request)
    {
        $token_name_when_login = $request->get('token');
        if (isset($token_name_when_login) && !empty($token_name_when_login)) {

            JWTAuth::setToken($token_name_when_login);
        }
        try {
            $user_role = $this->userRepository->with(['roles', 'estates'])->find(Auth::user()->id);
            if ($user_role) {
                return response()->json($user_role);
            } else {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        }catch (\Exception $e){
            return response()->json(['error' => 'invalid_credentials'], 401);
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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
