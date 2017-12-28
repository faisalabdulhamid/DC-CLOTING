<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Produk extends Model
{
    protected $table = 'produk';

    protected $hidden = [
    	'created_at', 'updated_at'
    ];

    protected $fillable = [
    	'kode', 'nama', 'harga', 'gambar', 'pegawai_id', 'kategori_id'
    ];

    public function pegawai()
    {
    	return $this->belongsTo(Pegawai::class, 'pegawai_id');
    }

    public function kategori()
    {
    	return $this->belongsTo(Kategori::class, 'kategori_id');
    }
}
