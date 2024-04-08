<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostInteraction extends Model
{    public function posts()
    {
        return $this->belongsTo(Post::class);
    }
    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
