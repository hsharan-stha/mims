<?php

namespace App\Http\Middleware;

use Closure;

class LanguageSelector
{


    /**
     * LanguageSelector constructor.
     */
    public function __construct()
    {
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
        $currentLang = $request->lang;
        \Carbon\Carbon::setLocale($currentLang);
        \App::setLocale($currentLang);
        $cookie_name = "DSFLanguage";

        if(!isset($_COOKIE[$cookie_name])) {
            setcookie($cookie_name, $currentLang, time() + (86400 * 30), "/");
        }else{
            if($_COOKIE[$cookie_name] != $request->lang){
                setcookie($cookie_name, $currentLang, time() + (86400 * 30), "/");
            }
        }
        if(isset($currentLang)) {
            return $next($request);
        }else{
            return $next($request);
        }
    }
}
