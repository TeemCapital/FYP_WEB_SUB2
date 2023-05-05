<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class userController extends Controller
{
    // public function register(Request $request){
    //     // this line would validate all the requests
    //     $validator=Validator::make($request->all(),[
    //     // Here we would define the rules of validation
    //     'name'=>'required|unique:users',
    //     'email'=>'required',
    //     'password'=>'required',
    //     ]);
    //     if($validator->fails()){
    //         return response()->json(['error'=>$validator->errors()->all()],status:409);
    //     }
    //     $p=new User;
    //     $p->name=$request->name;
    //     $p->email=$request->email;
    //     $p->password=encrypt($request->password);
    //     $p->save();
    //     return response()->json(['messaeg'=>"successfully Registered"],status:409);
    // }

    public function register(Request $request){
        $validator= Validator::make($request->all(),[
            'name'=>'required',
            'email'=>'required',
            'password'=>'required'
        ]);
        if($validator->fails()){
            $response=[
                'success'=>false,
                'message'=>$validator->errors()
            ];
            return response()->json($response,400);
        }
        $input=$request->all();
        $input['password']=bcrypt($input['password']);
        $user=User::create($input);

        $success['token']=$user->createToken('MyApp')->plainTextToken;
        $success['name']=$user->name;
        $response=[
            'success'=>true,
            'data'=>$success,
            'manage'=>'User registered Successfully'
        ];
        return response()->json($response,200);

    }

    // public function login(Request $request){
    //     $validator=Validator::make($request->all(),[
    //         // Here we would define the rules of validation
    //         'email'=>'required',
    //         'password'=>'required',
    //         ]);
    //         if($validator->fails()){
    //             return response()->json(['error'=>$validator->errors()->all()],status:409);
    //         }
    //         $user=User::where('email',$request->email)->get()->first();
    //         $password=decrypt($user->password);
    //         if($user && $password==$request->password){
    //             return response()->json(['user'=>$user]);
    //         }
    //         else{
    //             return response()->json(['error'=>"oops something went wrong"],status:409);
    //         }
    //     }
    public function login(Request $request){

        if(Auth::attempt(['email'=>$request->email,'password'=>$request->password])){
             /** @var \App\Models\MyUserModel $user **/
            $user=Auth::user();
            $success['token']=$user->createToken('MyApp')->plainTextToken;
            $success['name']=$user->name;
            $success['id']=$user->id;

            $response=[
                'success'=>true,
                'data'=>$success,
                'manage'=>'User loggedIn Successfully'
            ];
            return response()->json($response,200);
        }else{
            return response()->json(['error'=>"oops something went wrong"],status:409);

        }
    }
    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message'=>"user successully logged out"
        ],200);
    }
}
