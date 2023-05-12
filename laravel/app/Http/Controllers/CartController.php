<?php

namespace App\Http\Controllers;

use App\Models\cart;
use App\Models\User;
use Illuminate\Http\Request;

class CartController extends Controller
{
    function cart(Request $request){
        $p=new cart();
        $p->user_id=$request->user_id;
        $p->title=$request->title;
        $p->category=$request->category;
        $p->description=$request->description;
        $p->price=$request->price;
        $p->quantity=$request->quantity;
        $p->totalPrice=$request->quantity * $request->price ;
        $p->image=$request->image;
        $p->imagepath=$request->imagepath;
        $p->save();
    }
    function showCart(){
        return cart::all();
    }
    function deleteItem($id){
        if($id){
            cart::find($id)->delete();
            return response()->json(["Deleted"=>"successfully"]);
        }
        return response()->json(["error"=>"occured"]);
    }
    public function totalAmount(){
        $totalAmount=cart::sum('totalPrice');
        if($totalAmount){
            return $totalAmount;
        }
        return response()->json(["Message: Something went wrong"]);
    }
    public function getProductCount(){
        $count =cart::count('title');
        if($count){
            return $count;
        }

        return response()->json(['Message'=>'Total Count is'. $count]);
    }
    public function cartData($id){
        return user::find($id)->showCartData;
    }

}
