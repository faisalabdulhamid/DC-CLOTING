<?php

namespace App\Entities;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Promosi extends Model
{
    protected $table = 'promosi';
    protected $fillable = ['subjek', 'isi_promosi', 'mulai_promosi', 'akhir_promosi', 'status', 'pegawai_id', 'gambar'];
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function pegawai()
    {
    	return $this->belongsTo(Pegawai::class, 'pegawai_id');
    }

    public function scopeTampil($query)
    {
    	$now = Carbon::today()->toDateString();

    	return $query->where('status', 1)
    		->where('mulai_promosi', '<=', $now)
    		->where('akhir_promosi', '>=', $now);

    }
}
