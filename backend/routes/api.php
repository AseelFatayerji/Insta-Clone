<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\FollowerController;
use App\Http\Controllers\PostInteractionController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/getInfo',[UserController::class,'getInfo'] ) ;
Route::get('/editinfo',[UserController::class,'editinfo'] ) ;
Route::get('/follow',[FollowerController::class,'addFollower'] );

Route::post('/createPost',[PostController::class,'createPost'] );
Route::post('/addInteraction',[PostInteractionController::class,'addInteraction'] );
Route::post('/deletePost',[PostController::class,'deletePost'] );