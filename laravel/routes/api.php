<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\userController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('add',[ProductController::class,'add']);
Route::put('update',[ProductController::class,'update']);
Route::delete('delete',[ProductController::class,'delete']);
Route::get('show',[ProductController::class,'show']);
Route::get('login',[userController::class,'login']);
Route::post('register',[userController::class,'register']);
Route::get('show/{id}',[ProductController::class,'showDetail']);
Route::post('cart',[CartController::class,'cart']);
Route::get('showCart',[CartController::class,'showCart']);
Route::delete('delete/{id}',[CartController::class,'deleteItem']);
