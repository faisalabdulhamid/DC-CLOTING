<?php

namespace App;

use App\Entities\Produk;
use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    protected $table = 'transaksi';
    protected $fillable = ['pelanggan_id', 'tanggal', 'total_bayar'];

    public function produk()
    {
    	return $this->belongsTomany(Produk::class, 'transaksi_detail', 'produk_id', 'transaksi_id')
    	->withPivot('qty', 'sub_total');
    }
}
