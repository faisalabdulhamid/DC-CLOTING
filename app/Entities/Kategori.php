<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Kategori extends Model
{
    protected $table = 'kategori';

    protected $hidden = [
    	'created_at', 'updated_at'
    ];

    protected $fillable = [
    	'kategori'
    ];

    public function produk()
    {
    	return $this->hasMany(Produk::class, 'kategori_id');
    }
}
