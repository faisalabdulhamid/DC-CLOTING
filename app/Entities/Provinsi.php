<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Provinsi extends Model
{
    protected $table = 'provinsi';

    protected $hidden = [
    	'created_at', 'updated_at'
    ];

    protected $fillable = [
    	'provinsi'
    ];

    public function kota()
    {
    	return $this->hasMany(Kota::class, 'provinsi_id');
    }
}
