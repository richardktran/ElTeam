<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\GoogleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TopicController;
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


Route::post('/file/upload', [FileController::class, 'upload'])->name('upload');
Route::post('/file/upload/multiple', [FileController::class, 'multipleUpload'])->name('multipleUpload');
Route::post('/file/import-students', [FileController::class, 'importStudents'])->name('file.importStudents');
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
    Route::get('/{course}/groups', [GroupController::class, 'getAll'])->name('groups.getAllGroups');
    Route::get('/{course}', [CourseController::class, 'detail'])->name('course.detail');
    Route::get('/{course}/members', [CourseController::class, 'membersList'])->name('course.members');
    Route::get('/{course}/curriculum', [CourseController::class, 'getcurriculum'])->name('course.get-curriculum');

    //GET: Group
    Route::get('/{course}/groups/my-group', [GroupController::class, 'getMyGroup'])->name('course.get-my-group');

    Route::post('/', [CourseController::class, 'create'])->name('courses.create');
    Route::post('/{course}/invite', [CourseController::class, 'invite'])->name('course.invite');
    Route::post('/{course}/accept', [CourseController::class, 'accept'])->name('course.accept');
    Route::post('/{course}/decline', [CourseController::class, 'decline'])->name('course.decline');
    Route::post('/{course}/curriculum', [CourseController::class, 'createOrUpdateCurriculum'])->name('course.update-curriculum');
    Route::post('/{course}/divide-random-groups', [CourseController::class, 'divideStudentToGroups'])->name('course.divideStudentToGroups');
});

Route::group(['prefix' => 'groups', 'middleware' => ['auth:sanctum', 'role:student,teacher,admin']], function () {
    Route::get('/{group}/tasks', [TaskController::class, 'getTasksForGroup'])->name('groups.task.get');
    Route::get('/{group}', [GroupController::class, 'getGroupInfo'])->name('groups.group.get');

    Route::post('/{group}/tasks', [TaskController::class, 'createTask'])->name('groups.task.create');
    Route::post('/{group}/update-task-position', [TaskController::class, 'updatePositionTask'])->name('groups.task.update-position');
});

Route::group(['prefix' => 'tasks', 'middleware' => ['auth:sanctum', 'role:student,teacher,admin']], function () {
    Route::get('/{task}', [TaskController::class, 'getTask'])->name('groups.task.get.info');
    Route::get('/{task}/group', [TaskController::class, 'getGroupOfTask'])->name('groups.task.get.groupOfTask');
    Route::put('/{task}', [TaskController::class, 'updateTask'])->name('groups.task.update');
});

Route::group(['prefix' => 'users', 'middleware' => ['auth:sanctum']], function () {
    Route::get('/', [UserController::class, 'index'])->name('users.index');
    Route::get('/{user}', [UserController::class, 'show'])->name('users.show');
    Route::get('/get-by-email', [UserController::class, 'getByEmail'])->name('users.get-by-email');
});

Route::group(['prefix' => 'topics', 'middleware' => ['auth:sanctum', 'role:student,teacher,admin']], function () {
    Route::get('/', [TopicController::class, 'index'])->name('topics.get');

    Route::post('/', [TopicController::class, 'create'])->name('groups.topic.create');
    Route::put('/{topic}', [TopicController::class, 'update'])->name('groups.topic.update');
    Route::delete('/{topic}', [TopicController::class, 'destroy'])->name('groups.topic.destroy');
    Route::post('/update-position', [TopicController::class, 'updatePosition'])->name('groups.topic.update-position');
    Route::post('/{topic}/toggle-lock', [TopicController::class, 'toggleLock'])->name('groups.topic.toggle-lock');
});

Route::group(['prefix' => 'activities', 'middleware' => ['auth:sanctum', 'role:student,teacher,admin']], function () {
    Route::get('/', [ActivityController::class, 'index'])->name('activities.get');

    Route::post('/', [ActivityController::class, 'create'])->name('activities.create');
    Route::put('/', [ActivityController::class, 'updateActivities'])->name('activities.updateAll');
    Route::put('/{activity}', [ActivityController::class, 'update'])->name('activities.update');
    Route::delete('/{activity}', [ActivityController::class, 'destroy'])->name('activities.destroy');
    Route::post('/{activity}/toggle-lock', [ActivityController::class, 'toggleLock'])->name('activity.toggle-lock');
});
