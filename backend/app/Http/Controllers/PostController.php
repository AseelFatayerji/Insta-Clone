<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    function createPost(Request $request)
    {
        $post = new Post();
        $post->title = $request->title;
        $post->user_id = $request->user;
        $post->Description = $request->content;
        $post->save();
        return response()->json(["message"=>"post was created",'info' => $post]);        
    }
    function deletePost(Request $request)
    {
        $post = Post::where("id", $request->id)->first();
        $post->delete();
        return response()->json(["message"=>"post was deleted"]);        
    }
}
