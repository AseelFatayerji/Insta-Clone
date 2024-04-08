<?php

namespace App\Http\Controllers;

use App\Models\Follower;
use Illuminate\Http\Request;

class FollowerController extends Controller
{
    function addFollowe(Request $request)
    {
        $check = Follower::where("user_id", $request->id)->where("follower_id", $request->follower_id)->first();
        if (!$check) {
            $follower = new Follower();
            $follower->user_id = $request->id;
            $follower->follower_id = $request->follower_id;

            $follower->save();

            return response()->json(["message" => "added follower interaction", 'info' => $follower]);
        } else {

            $check->delete();

            return response()->json(["message" => "removed follower"]);
        }
    }
}
