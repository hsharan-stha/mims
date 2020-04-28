<?php

namespace App\Http\Middleware;

use App\Repositories\RoleRepository;
use App\Repositories\UserRepository;
use App\Repositories\RouteRepository;
use Closure;
use Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthorizeRoute
{

    /**
     * @var
     */
    protected $userRepository;


    /**
     * @var
     */
    protected $routeRepository;


    /**
     * @var RoleRepository
     */
    protected $roleRepository;

    /**
     * AuthorizeRoute constructor.
     * @param UserRepository $userRepository
     * @param RouteRepository $routeRepository
     */
    public function __construct(UserRepository $userRepository, RouteRepository $routeRepository, RoleRepository $roleRepository)
    {
       $this->userRepository = $userRepository;
       $this->routeRepository = $routeRepository;
        $this->roleRepository = $roleRepository;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $authorized     = false;    // Default to protect all routes.
        $errorCode      = 0;        // Default to something bogus...
        $method         = null;
        $path           = null;
        $actionName     = null;
        $user           = null;
        $username       = null;
        $guest          = false;
        $auth_estate_id = null;
        $auth_user_id = null;
        $token = \JWTAuth::getToken();
        $actionName = \Request::route()->getActionName();
        $routeName = \Request::route()->getName();

        if(!$routeName){
            $routeName = \Route::getFacadeRoot()->current()->uri();
        }
//        try {
            
            if (isset($token) && !empty($token)) {
                $authenticated_user_id = JWTAuth::parseToken()->authenticate()->id;
                $user = $this->userRepository->with(['roles', 'estates'])->find($authenticated_user_id);
                $user_estates=$user->estates()->lists('id')->toArray();

                if(in_array($request->estate,$user_estates)) {
                    $authorized = true;
                    $auth_user_estate_id= $request->estate;
                }
                $user_role = $user->roles()->first();
                $user_role_name = $user_role->name;
                if($user_role_name == 'root-admin'){
                    $request->merge(compact('auth_user_estate_id'));
                    $request->merge(compact('authenticated_user_id'));
                    return $next($request);
                }
                $user_role_id = $user_role->id;

            } else {
                return response()->json(['error' => 'Invalid Access'], 401);
                $authorized= false;
//                $user_role_name = 'guest';
//                $user_role = $this->roleRepository->findByField('name', $user_role_name)->first();
//                if ($user_role) {
//                    $user_role_id = $user_role->id;
//                }
            }
//        }catch (\Exception $e){
//            return response()->json(['error' => 'Invalid Access'], 401);
//        }

        // AuthController and PasswordController are exempt from authorization.
        // TODO: Get list of controllers exempt from config.
        if (str_contains($actionName, 'AuthenticateController@') ||
            str_contains($actionName, 'PasswordController@')
        ) {
            $authorized = true;
        }
        else{
            $permissions_id = [];
            $user_permissions = $this->roleRepository->with(['perms'])->find($user_role_id)->perms;
            foreach($user_permissions as $user_permission)
            {
                array_push($permissions_id,$user_permission->id);
            }
//            $route = $this->routeRepository->findByField('name',$routeName)->first();
            $route = $this->routeRepository->findWhere(['name'=>$routeName,'action_name'=>$actionName])->first();
            if($route)
            {
                if (in_array($route->permission_id, $permissions_id)) {
                    $authorized = true;
                } else {
                    $authorized = false;
                }
            }else{
                return response()->json(['error' => 'Route Not Defined'], 401);
            }

        }

        if($authorized == true)
        {
            if($authenticated_user_id != null && $auth_user_estate_id != null) {
                $request->merge(compact('auth_user_estate_id'));
                $request->merge(compact('authenticated_user_id'));
                return $next($request);
            }else{
                return response()->json(['error' => 'Invalid Access'], 401);
            }
        }else{
            return response()->json(['error' => 'Invalid Access'], 401);
        }

    }
}
