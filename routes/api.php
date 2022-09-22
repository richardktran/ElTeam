<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
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

Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
});


Route::group(['prefix' => 'courses','middleware' => ['auth:sanctum', 'role:teacher,admin']], function () {
    Route::get('/', [CourseController::class, 'index']);
    Route::post('/', [CourseController::class, 'create']);
});

Route::group(['prefix' => 'users','middleware' => ['auth:sanctum']], function () {
    Route::get('/', [UserController::class, 'index']);
    Route::get('/{id:[0-9]+}', [UserController::class, 'show']);
    Route::get('/get-by-email', [UserController::class, 'getByEmail']);
});
