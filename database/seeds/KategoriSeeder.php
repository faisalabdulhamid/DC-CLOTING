<?php

use App\Entities\Kategori;
use Illuminate\Database\Seeder;

class KategoriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $kategori = ['Celana', 'Jaket', 'T-Shirt', 'Kemeja'];

        foreach ($kategori as $key => $value) {
        	Kategori::create(['kategori'=>$value]);
        }
    }
}
