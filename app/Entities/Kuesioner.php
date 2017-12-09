<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Kuesioner extends Model
{
    protected $table = 'kuesioner';

    protected $hidden = [
    	'created_at', 'updated_at'
    ];

    protected $fillable = [
    	'soal', 'pegawai_id'
    ];

    public static function init()
    {
    	return [
    		'soal' => '',
    		'pegawai_id' => '',
    	];
    }

    public function edit()
    {
    	return [
    		'soal' => $this->nama,
    		'pegawai_id' => $this->pegawai_id,
    	];
    }
}
