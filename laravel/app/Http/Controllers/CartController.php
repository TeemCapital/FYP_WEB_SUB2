<?php

namespace App\Http\Controllers;

use App\Models\cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    function cart(Request $request){
        $p=new cart();
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
}
