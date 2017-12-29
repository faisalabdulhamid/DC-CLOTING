<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Pelanggan extends Model
{
    protected $table = 'pelanggan';

    protected $hidden = [
    	'created_at', 'updated_at'
    ];

    public static function init()
    {
    	return [
    		'nama' => '',
    		'no_telepon' => '',
    		'kota_id' => '',
    	];
    }

    public function edit()
    {
    	return [
    		'nama' => $this->nama,
    		'no_telepon' => $this->no_telepon,
    		'kota_id' => $this->kota_id,
    	];
    }

    public function jawaban()
    {
        return $this->belongsToMany(Kuesioner::class, 'jawaban_kuesioner', 'pelanggan_id', 'kuesioner_id');
    }

    public function desains()
    {
        return $this->morphMany(Desain::class, 'desainable');
    }
}
