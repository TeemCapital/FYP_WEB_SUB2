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
            'storeName'=>'required ',
            'email'=>'required',
            'password'=>'required',
        ]);
        try{
            $input=$request->all();
            $input['password']=bcrypt($input['password']);
            $user=User::create($input);
            $success['token']=$user->createToken('MyApp')->plainTextToken;
            $success['name']=$user->name;
            $success['storeName']=$user->storeName;
            $response=[
                'success'=>true,
                'data'=>$success,
                'manage'=>'User registered Successfully'
            ];
            return response()->json($response,200);
        }
        catch (\Illuminate\Database\QueryException $exception) {
            // Check if the error is a duplicate entry error
            if ($exception->errorInfo[1] == 1062 && $request->storeName!=0) { // 1062 is the error code for duplicate entry
                // Return error response
                return response()->json([
                    'message' => 'Email or Store Name Already Exists',
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
    // public function login(Request $request){

    //     if(Auth::attempt(['email'=>$request->email,'password'=>$request->password])){
    //          /** @var \App\Models\MyUserModel $user **/
    //         $user=Auth::user();
    //         $success['token']=$user->createToken('MyApp')->plainTextToken;
    //         $success['name']=$user->name;
    //         $success['id']=$user->id;
    //         $response=[
    //             'success'=>true,
    //             'data'=>$success,
    //             'manage'=>'User loggedIn Successfully'
    //         ];
    //         return response()->json($response,200);
    //     }else{
    //         return response()->json(['error'=>"Wrong credentials"],status:409);

    //     }
    // }
//     public function login(Request $request)
// {
//     $credentials = $request->only('email', 'password');
//     // Check if the request includes the storeName field
//     if ($request->has('storeName')) {
//         $credentials['storeName'] = $request->storeName;
//     }
//     if (Auth::attempt($credentials)) {
//         /** @var \App\Models\MyUserModel $user **/
//         $user = Auth::user();
//         $success['token'] = $user->createToken('MyApp')->plainTextToken;
//         $success['name'] = $user->name;
//         $success['id'] = $user->id;
//         $response = [
//             'success' => true,
//             'data' => $success,
//             'manage' => 'User logged in successfully'
//         ];
//         return response()->json($response, 200);
//     } else {
//         return response()->json(['error' => "Wrong credentials"], 409);
//     }
// }
public function login(Request $request)
{
    $credentials = $request->only('email', 'password');
    // Check if the request includes the storeName field
    if ($request->has('storeName')) {
        $credentials['storeName'] = $request->storeName;
    }
    if (Auth::attempt($credentials)) {
        /** @var \App\Models\MyUserModel $user **/
        $user = Auth::user();

        // Check if the user has a storeName stored in the database
        if ($user->storeName && !$request->has('storeName')) {
            return response()->json(['error' => 'Login with another account'], 409);
        }

        $success['token'] = $user->createToken('MyApp')->plainTextToken;
        $success['name'] = $user->name;
        $success['id'] = $user->id;
        $response = [
            'success' => true,
            'data' => $success,
            'manage' => 'User logged in successfully'
        ];
        return response()->json($response, 200);
    } else {
        return response()->json(['error' => 'Wrong credentials'], 409);
    }
}

    public function logout(Request $request){
        if($request->user()){
            $request->user()->currentAccessToken()->delete();
        }
        return response()->json([
            'message'=>"user successully logged out"
        ],200);
    }
}
