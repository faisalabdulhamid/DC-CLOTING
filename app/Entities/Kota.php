<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Kota extends Model
{
    protected $table = 'kota';

    protected $hidden = [
    	'created_at', 'updated_at'
    ];

    protected $fillable = [
    	'kota', 'provinsi_id'
    ];

    public static function init()
    {
    	return [
    		'kota' => '',
    		'provinsi_id' => '',
    	];
    }

    public function edit()
    {
    	return [
    		'kota' => $this->kota,
    		'provinsi_id' => $this->provinsi_id,
    	];
    }
}
