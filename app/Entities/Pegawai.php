<?php

namespace App\Entities;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Pegawai extends Authenticatable
{
    use HasApiTokens, Notifiable;
    protected $table = 'pegawai';

    protected $hidden = [
    	'password', 'remember_token', 'created_at', 'updated_at'
    ];
    // protected $visible = [
    //     'id', 'nama', 'email', 'status'
    // ];
    public static function init()
    {
    	return [
    		'nama' => '',
    		'email' => '',
    		'password' => '',
    	];
    }

    public function edit()
    {
    	return [
    		'nama' => $this->nama,
    		'email' => $this->email,
    	];
    }

    public function desains()
    {
        return $this->morphMany(Desain::class, 'desainable');
    }
}
