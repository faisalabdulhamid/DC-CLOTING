<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
// use Illuminate\Foundation\Auth\User as Authenticatable;

class Pelanggan extends User
{
    use HasApiTokens, Notifiable;
    protected $table = 'pelanggan';

    protected $hidden = [
    	'created_at', 'updated_at'//, 'api_token'
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

    public function kota()
    {
        return $this->belongsTo(Kota::class);
    }
}
