<?php

namespace App;

use App\Entities\Pelanggan;
use App\Entities\Produk;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Transaksi extends Model
{
    protected $table = 'transaksi';
    protected $fillable = ['pelanggan_id', 'tanggal', 'total_bayar', 'pegawai_id'];

    public function produk()
    {
    	return $this->belongsTomany(Produk::class, 'transaksi_detail', 'transaksi_id', 'produk_id')
    	   ->withPivot('qty', 'sub_total');
    }

    public function pelanggan()
    {
        return $this->belongsTo(Pelanggan::class, 'pelanggan_id');
    }

    public static function boot()
    {
    	parent::boot();

    	static::creating(function ($model)
    	{
    		$model->pegawai_id = Auth::user()->id;
    	});
    }
}
