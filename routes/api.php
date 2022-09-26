<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\GoogleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/send-mail', function () {
    $user = [
        'name' => 'User Richard',
        'body' => 'This is simple mail from Readerstacks'
    ];

    \Mail::to('dangtran.khoa@nfq.asia')->send(new \App\Mail\TestMail($user));
});

Route::post('/login', [AuthController::class, 'login']);
Route::get('/auth/google/url', [GoogleController::class, 'loginUrl']);
Route::get('/auth/google/callback', [GoogleController::class, 'loginCallback']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
});


Route::group(['prefix' => 'courses', 'middleware' => ['auth:sanctum', 'role:student,teacher,admin']], function () {
    Route::get('/', [CourseController::class, 'index']);
    Route::post('/', [CourseController::class, 'create']);
    Route::post('/invite', [CourseController::class, 'invite']);
});

Route::group(['prefix' => 'users', 'middleware' => ['auth:sanctum']], function () {
    Route::get('/', [UserController::class, 'index']);
    Route::get('/{id:[0-9]+}', [UserController::class, 'show']);
    Route::get('/get-by-email', [UserController::class, 'getByEmail']);
});
