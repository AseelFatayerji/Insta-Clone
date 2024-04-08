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

        return response()->json(["message"=>"post was created",'info' => $post]);        
    }
    function deletePost(Request $request)
    {
        $post = Post::find($request->id);
        $post->delete();
        return response()->json(["message"=>"post was deleted"]);        
    }
}
