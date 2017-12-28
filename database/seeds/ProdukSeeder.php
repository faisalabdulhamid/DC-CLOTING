<?php

use App\Entities\Produk;
use Illuminate\Database\Seeder;

class ProdukSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$produks = [
    		['B.0101', 'T-shirt DC', 75000, '/img/t-sirt-dc.jpg', 1, 3],
    		['BPJ.0087', 'T-shirt Panjang DC', 85000, '/img/t-pj-sirt-dc.jpg', 1, 3],
    		['CPJ.0637', 'Origin DC', 90000, '/img/c-pj-sirt-dc.jpg', 1, 1],
    		['JKET.0207', 'Jaket Mayer Kupluk', 95000, '/img/jkt-sirt-dc.jpg', 1, 2],
    		['KMJ.0374', 'Kemeja Katun DC', 80000, '/img/kmj-dc.jpg', 1, 4],
    	];
    	foreach ($produks as $key => $produk) {
    		Produk::create([
    			'kode' => $produk[0],
    			'nama' => $produk[1],
    			'harga' => $produk[2],
    			'gambar' => $produk[3],
    			'pegawai_id' => $produk[4],
    			'kategori_id' => $produk[5],
    		]);
    	}
        
    }
}
