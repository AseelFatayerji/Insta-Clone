<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    function displayPost(Request $request)
    {
        $email = $request->email;
        $post = Post::select("*")->join("users", 'users.id','=','posts.user_id')->get();

        return response()->json(['message' => 'post display','post'=>$post]);
    }
    function displayUserPost(Request $request)
    {
        $id = $request->user_id;
        $post = Post::select("*")->join("users", 'users.id','=','posts.user_id')->where("user_id",$id)->get();

        return response()->json(['message' => 'user post display','post'=>$post]);
    }
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
