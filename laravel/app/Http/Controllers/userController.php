<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class userController extends Controller
{
    public function register(Request $request){
        // this line would validate all the requests
        $validator=Validator::make($request->all(),[
        // Here we would define the rules of validation
        'name'=>'required|unique:users',
        'email'=>'required',
        'password'=>'required',
        ]);
        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->all()],status:409);
        }
        $p=new User;
        $p->name=$request->name;
        $p->email=$request->email;
        $p->password=encrypt($request->password);
        $p->save();
        return response()->json(['messaeg'=>"successfully Registered"],status:409);
    }
    public function login(Request $request){
        $validator=Validator::make($request->all(),[
            // Here we would define the rules of validation
            'email'=>'required',
            'password'=>'required',
            ]);
            if($validator->fails()){
                return response()->json(['error'=>$validator->errors()->all()],status:409);
            }
            $user=User::where('email',$request->email)->get()->first();
            $password=decrypt($user->password);
            if($user && $password==$request->password){
                return response()->json(['user'=>$user]);
            }
            else{
                return response()->json(['error'=>"oops something went wrong"],status:409);
            }

        }

}
