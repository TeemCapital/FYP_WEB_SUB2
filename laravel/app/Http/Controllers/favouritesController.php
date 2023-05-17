<?php

namespace App\Http\Controllers;

use App\Models\favourite;
use App\Models\User;
use Illuminate\Http\Request;

class favouritesController extends Controller
{
    public function addToFavourites(Request $request){
        $favourite=new favourite();
        $favourite->user_id=$request->user_id;
        $favourite->title=$request->title;
        $favourite->description=$request->description;
        $favourite->price=$request->price;
        $favourite->image=$request->image;
        $favourite->imagepath=$request->imagepath;
        $favourite->save();
    }
    public function showFavourites($id){
        return User::find($id)->showFavourites;
    }

    function deleteFav($id){
        if($id){
            favourite::find($id)->delete();
            return response()->json(["Deleted"=>"successfully"]);
        }
        return response()->json(["error"=>"occured"]);
    }
}
