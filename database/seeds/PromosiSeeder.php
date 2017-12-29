<?php

use App\Entities\Promosi;
use Illuminate\Database\Seeder;

class PromosiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$promosi = [[
    	    		'subjek' => 'Wednesday Discount 50%', 
    	    		'isi_promosi' => 'Ayo datang ke toko kami dihari rabu, diskon 50% untuk semua jenis produk (kecuali T-Shirt)', 
    	    		'mulai_promosi' => '2017-12-01', 
    	    		'akhir_promosi' => '2017-12-31', 
    	    		'status' => 1, 
    	    		'pegawai_id' => 1
    	    	],[
    	    		'subjek' => 'TGIF Buy 1 Get 1 Free', 
    	    		'isi_promosi' => 'Di hari jumat, beli produk apa saja gratis 1 produk yang sama', 
    	    		'mulai_promosi' => '2017-12-03', 
    	    		'akhir_promosi' => '2018-12-01', 
    	    		'status' => 1, 
    	    		'pegawai_id' => 1
    	    	]];

    	foreach ($promosi as $value) {
    		Promosi::create([
    			'subjek' => $value['subjek'], 
	    		'isi_promosi' => $value['isi_promosi'], 
	    		'mulai_promosi' => $value['mulai_promosi'], 
	    		'akhir_promosi' => $value['akhir_promosi'], 
	    		'status' => $value['status'], 
	    		'pegawai_id' => $value['pegawai_id']
    		]);
    	}
    }
}
