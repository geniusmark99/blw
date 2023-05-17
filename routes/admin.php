<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Auth\LoginController;





Route::prefix('admin')->name('admin.')->group(function () {

    Route::view('/test', 'Admin.test');

    Route::middleware(['guest:admin'])->group(function () {
        Route::get('/login', [LoginController::class, 'showLoginForm'])->name("login");
        Route::post('/login', [LoginController::class, 'login'])->name('check');
    });


    Route::middleware(['auth:admin'])->group(function () {
        Route::get('/dashboard', [LoginController::class, 'dashboard'])->name('dashboard');
        Route::get('/users', [LoginController::class, 'users'])->name('users');
        Route::get('/signals', [LoginController::class, 'signals'])->name('signals');
        Route::get('/settings', [LoginController::class, 'settings'])->name('settings');
        Route::get('/trends', [LoginController::class, 'trends'])->name('trends');
        Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
    });
});
