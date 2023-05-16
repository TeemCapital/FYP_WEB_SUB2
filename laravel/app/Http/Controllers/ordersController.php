<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ordersController extends Controller
{
    public function showOrders(){
            return response()->json(["function"=>"works"]);
    }

}
