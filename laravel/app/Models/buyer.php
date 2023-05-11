<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class buyer extends Model
{
    use HasApiTokens;
    use HasFactory;
    protected $fillable=['email','username','password'];

}
