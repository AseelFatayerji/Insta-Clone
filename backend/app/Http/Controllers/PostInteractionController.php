<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PostInteraction;

class PostInteractionController extends Controller
{
    function addInteraction(Request $request)
    {
        $check = PostInteraction::where("user_id", $request->id)->where("post_id", $request->post_id)->first();
        if (!$check) {
            $post = new PostInteraction();
            $post->user_id = $request->id;
            $post->post_id = $request->post_id;
            $post->Liked = $request->like;
            $post->Comments = $request->Comments;

            $post->save();

            return response()->json(["message" => "created post interaction", 'info' => $post]);
        } else {
            $check->user_id = $request->id;
            $check->post_id = $request->post_id;
            $check->Liked = $request->like;
            $check->Comments = $request->Comments;

            $check->save();

            return response()->json(["message" => "edited post interaction", 'info' => $check]);
        }
    }

}
