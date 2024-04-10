<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class UserController extends Controller
{
    function getInfo(Request $request)
    {
        $email = $request->email;
        $user = User::select("*")->where("email", $email)->first();
        if ($user) {
            return response()->json(['info' => $user]);
        }
        return response()->json(['error' => 'user not found']);
    }
    function editinfo(Request $request)
    {
        $email = $request->email;
        $item = $request->item;
        $value = $request->value;

        $user = User::select("*")->where("email", $email)->first();
        if($item == "password"){
            $user->$item =   Hash::make($value);
            $user->save();

        return response()->json(["message"=>"updated user",'info' => $user]);  
        }
        $user->$item = $value;
        $user->save();

        return response()->json(["message"=>"updated user",'info' => $user]);        
    }
    function deleteUser($email)
    {
        $user = User::find($email);
        $user->delete();
        $user->save();

        return response()->json(["message"=>"user was deleted"]);        
    }
}
