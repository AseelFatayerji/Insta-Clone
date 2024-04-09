<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PostInteraction;

class PostInteractionController extends Controller
{
    function getInteracions(Request $request){
        $interaction = PostInteraction::select("*")->join("posts","post_id","=","posts.id")->get();
        return response()->json(["message" => "post interaction", 'info' => $interaction]);

    }
    function addInteraction(Request $request)
    {
        $check = PostInteraction::where("user_id", $request->id)->where("post_id", $request->post_id)->first();
        if (!$check) {
            $post = new PostInteraction();
            $post->user_id = $request->id;
            $post->post_id = $request->post_id;
            $post->Liked = $request->like;
            $post->Comments = $request->comments;

            $post->save();

            return response()->json(["message" => "created post interaction", 'info' => $post]);
        } else {
            $item =$request->interaction;
            $check->user_id = $request->id;
            $check->post_id = $request->post_id;
            $check->$item = $request->value;

            $check->save();

            return response()->json(["message" => "edited post interaction", 'info' => $check]);
        }
    }

}
