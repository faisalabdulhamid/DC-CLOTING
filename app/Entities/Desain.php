<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Desain extends Model
{
    protected $table = 'desain';

    protected $hidden = [
    	'created_at', 'updated_at', 'desainable_id', 'desainable_type'
    ];

    protected $fillable = ['gambar', 'desainable_id', 'desainable_type'];

    public function desainable()
    {
        return $this->morphTo();
    }

    public function like()
    {
        return $this->belongsToMany(Pelanggan::class, 'like', 'desain_id', 'pelanggan_id');
    }

    public function dislike()
    {
    	return $this->belongsToMany(Pelanggan::class, 'like', 'desain_id', 'pelanggan_id');
    }
}
