<?php

namespace App\Observers;

use App\Entities\Produk;
use Illuminate\Support\Facades\Auth;

class ProdukObserver
{
    public function creating(Produk $produk)
    {
    	// $produk->pegawai_id = Auth::user()->id;
    }

    public function updating(Produk $produk)
    {
    	// $produk->pegawai_id = Auth::user()->id;
    }
}
