<?php

namespace App\Http\Controllers;

use App\Models\product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function add(Request $request){
        // this line would validate all the requests
        $validator=Validator::make($request->all(),[
        // Here we would define the rules of validation
        'title'=>'required',
        'category'=>'required',
        'description'=>'required',
        'image'=>'required|image',
        'price'=>'required',
        ]);
        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->all()],status:409);
        }
        $p=new product();
        $p->title=$request->title;
        $p->category=$request->category;
        $p->user_id=$request->user_id;
        $p->description=$request->description;
        $p->price=$request->price;
        $p->save();

        $url='http://127.0.0.1:8000/storage/';
        $file=$request->file('image');
        $extension=$file->getClientOriginalExtension();
        $path=$request->file('image')->storeAs('public/proimages/',$p->id.'.'.$extension);
        $p->image=$path;
        $p->imagepath=$url.'proimages//'. $p->id.'.'.$extension;
        $p->save();
    }

    public function update(Request $request){
        // this line would validate all the requests
        $validator=Validator::make($request->all(),[
        // Here we would define the rules of validation
        'name'=>'required',
        'category'=>'required',
        'brand'=>'required',
        'description'=>'required',
        'id'=>'required',
        'price'=>'required',
        ]);
        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->all()],status:409);
        }
        $p=product::find($request->id);
        $p->name=$request->name;
        $p->category=$request->category;
        $p->brand=$request->brand;
        $p->desc=$request->desc;
        $p->price=$request->price;
        $p->save();
        return response()->json(['message'=>'Product successfully updated']);
    }

    // public function delete(Request $request){
    //     // this line would validate all the requests
    //     $validator=Validator::make($request->all(),[
    //     // Here we would define the rules of validation
    //     'id'=>'required',
    //     ]);
    //     if($validator->fails()){
    //         return response()->json(['error'=>$validator->errors()->all()],status:409);
    //     }
    //     return product::find($request->id)->delete();
    //     // if($p){
    //     //     return response()->json(['message'=>'Product successfully deleted!']);
    //     // }
    // }

    public function delete($id){
        if($id){
            product::find($id)->delete();
            return response()->json(["Message"=>"Product Deleted successfully"]);
        }
        return response()->json(["error"=>"Some error occured"]);
    }
    public function sellerProductData($id){
        return User::find($id)->data;
    }
    public function show(Request $request){
        // session(['keys'=>$request->keys]);
        // $products=product::where(function($q){
        //     $q->where('products.id','LIKE',"%".session('keys').'%');
        //     $q->where('products.title','LIKE',"%".session('keys').'%');
        //     $q->where('products.price','LIKE',"%".session('keys').'%');
        //     $q->where('products.description','LIKE',"%".session('keys').'%');
        //     $q->where('products.category','LIKE',"%".session('keys').'%');
        // })->select('products.*')->get();
        // return response()->json(['products'=>$products]);
        $products= product::where('category','=','Men')->get();
        if($products){
            return $products;
        }
        return response()->json(["Message"=>"Something went wrong"]);
    }
    public function showWomenProducts(){
        $products=product::where('category','=','Women')->get();
        if($products){
            return $products;
        }
        return response()->json(['Message'=>"Something went wrong"]);
    }
    public function showDetail($id){
        $product= product::find($id);

        if(!$product){
            return response()->json(["error"=>"Item not found"]);
        }

        return response()->json($product);
    }



}
