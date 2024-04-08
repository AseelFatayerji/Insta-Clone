<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public function followers()
    {
        return $this->hasMany(Follower::class);

    }
    public function posts()
    {
        return $this->hasMany(Post::class);

    }
}
