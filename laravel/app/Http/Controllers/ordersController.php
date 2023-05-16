<?php

namespace App\Http\Controllers;

use App\Models\order;
use App\Models\User;
use Illuminate\Http\Request;

class ordersController extends Controller
{
    public function showOrders($id){
        return User::find($id)->ordersForMe;
    }

}
