<?php

use App\Http\Controllers\buyersController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ordersController;
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
Route::get('showWomenProducts',[ProductController::class,'showWomenProducts']);
Route::get('user/{id}/products',[ProductController::class,'sellerProductData']);
Route::post('login',[userController::class,'login']);
Route::post('register',[userController::class,'register']);
Route::get('show/{id}',[ProductController::class,'showDetail']);
Route::post('cart',[CartController::class,'cart']);
Route::get('totalAmount',[CartController::class,'totalAmount']);
Route::get('getProductCount',[CartController::class,'getProductCount']);
Route::delete('delete/{id}',[CartController::class,'deleteItem']);
Route::delete('deleteProduct/{id}',[ProductController::class,'delete']);
Route::post('/logout',[userController::class,'logout']);
Route::get('buyer/{id}/products',[CartController::class,'cartData']);
Route::get('{id}/showOrders',[ordersController::class,'showOrders']);
Route::post('placeOrder',[CartController::class,'placeOrder']);


Route::delete('{id}/deleteCartItems',[CartController::class,'deleteCartItems']);
