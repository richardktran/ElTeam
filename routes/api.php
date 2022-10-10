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


Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::get('/auth/google/url', [GoogleController::class, 'loginUrl'])->name('login.google.url');
Route::get('/auth/google/callback', [GoogleController::class, 'loginCallback'])->name('login.google.callback');

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/me', [AuthController::class, 'me'])->name('me');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});


Route::group(['prefix' => 'courses', 'middleware' => ['auth:sanctum', 'role:student,teacher,admin']], function () {
    Route::get('/own', [CourseController::class, 'getOwnCourses'])->name('courses.own');
    Route::get('/', [CourseController::class, 'getLearningCourses'])->name('courses.learn-courses');
    Route::get('/{course}', [CourseController::class, 'detail'])->name('course.detail');
    Route::get('/{course}/members', [CourseController::class, 'membersList'])->name('course.members');
    Route::get('/{course}/curriculum', [CourseController::class, 'getcurriculum'])->name('course.get-curriculum');

    Route::post('/', [CourseController::class, 'create'])->name('courses.create');
    Route::post('/{course}/invite', [CourseController::class, 'invite'])->name('course.invite');
    Route::post('/{course}/accept', [CourseController::class, 'accept'])->name('course.accept');
    Route::post('/{course}/decline', [CourseController::class, 'decline'])->name('course.decline');
    Route::post('/{course}/curriculum', [CourseController::class, 'createOrUpdateCurriculum'])->name('course.update-curriculum');
});

Route::group(['prefix' => 'users', 'middleware' => ['auth:sanctum']], function () {
    Route::get('/', [UserController::class, 'index'])->name('users.index');
    Route::get('/{id:[0-9]+}', [UserController::class, 'show'])->name('users.show');
    Route::get('/get-by-email', [UserController::class, 'getByEmail'])->name('users.get-by-email');
});
