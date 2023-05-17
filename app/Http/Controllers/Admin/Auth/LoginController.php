<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;



class LoginController extends Controller
{

    public function showLoginForm()
    {
        return view('Admin.Login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:admins',
            'password' => 'required|min:5|max:30',
        ]);

        $credentials = $request->only('email', 'password');
        // return $request;

        if (Auth::guard('admin')->attempt($credentials)) {
            return redirect()->route('admin.dashboard');
        } else {
            return redirect()->route('admin.login');
        }


        return back()->withErrors([
            'email' => 'The provided credentials do not match our records',
        ]);
    }



    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('admin.login');
    }


    public function dashboard()
    {

        return view('Admin.Dashboard');
    }

    public function users()
    {

        return view('Admin.Users');
    }

    public function signals()
    {

        return view('Admin.Signals');
    }

    public function settings()
    {

        return view('Admin.Settings');
    }

    public function trends()
    {

        return view('Admin.Trends');
    }
}
