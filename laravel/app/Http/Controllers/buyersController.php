<?php

namespace App\Http\Controllers;
use App\Models\buyer;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class buyersController extends Controller
{
    public function registerBuyer(Request $request){
        $validator= Validator::make($request->all(),[
            'username'=>'required',
            'email'=>'required',
            'password'=>'required'
        ]);
        try{
            $input=$request->all();
            $input['password']=bcrypt($input['password']);
            $user=buyer::create($input);

            $success['token']=$user->createToken('MyApp')->plainTextToken;
            $success['username']=$user->name;
            $response=[
                'success'=>true,
                'data'=>$success,
                'manage'=>'User registered Successfully'
            ];
            return response()->json($response,200);
        }
        catch (\Illuminate\Database\QueryException $exception) {
            // Check if the error is a duplicate entry error
            if ($exception->errorInfo[1] == 1062) { // 1062 is the error code for duplicate entry
                // Return error response
                return response()->json([
                    'message' => 'Email Already Exists',
                ], 409);
            }

            // Otherwise, re-throw the exception
            throw $exception;
        }
        // if($validator->fails()){
        //     $response=[
        //         'success'=>false,
        //         'message'=>"Email or StoreName Alredy Exists"
        //     ];
        //     return response()->json($response,400);
        // }


    }
    public function userLogin(Request $request){

        if(Auth::attempt(['email'=>$request->email,'password'=>$request->password])){
                     /** @var \App\Models\Buyer $buyer **/
            $buyer=Auth::user();
            $success['token']=$buyer->createToken('MyApp')->plainTextToken;
            $success['username']=$buyer->username;
            $success['id']=$buyer->id;
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
    public function userLogout(Request $request){
        if($request->user()){
            $request->user()->currentAccessToken()->delete();
        }
        return response()->json([
            'message'=>"user successully logged out"
        ],200);
    }

}
