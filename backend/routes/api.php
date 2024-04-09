<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\FollowerController;
use App\Http\Controllers\PostInteractionController;
use App\Http\Controllers\AuthController;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', [AuthController::class, 'login'])->name('login');
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('signup', [AuthController::class, 'register']);
});

Route::get('/getInfo',[UserController::class,'getInfo'] ) ;
Route::get('/editinfo',[UserController::class,'editinfo'] ) ;

Route::get('/follow',[FollowerController::class,'addFollower'] );
Route::get('/follower',[FollowerController::class,'getFollower'] );
Route::get('/following',[FollowerController::class,'getFollowing'] );

Route::get('/displayPost',[PostController::class,'displayPost'] );
Route::get('/displayUserPost',[PostController::class,'displayUserPost'] );

Route::get('/getInteracions',[PostInteractionController::class,'getInteracions'] );

Route::post('/createPost',[PostController::class,'createPost'] );
Route::post('/deletePost',[PostController::class,'deletePost'] );

Route::post('/follow',[FollowerController::class,'addFollower'] );

Route::post('/addInteraction',[PostInteractionController::class,'addInteraction'] );