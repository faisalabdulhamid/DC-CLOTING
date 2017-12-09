<?php

use Illuminate\Database\Seeder;

class KuesionerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $kues = [
            ['Anda memilih produk DC Clothing karena memiliki kualitas produk yang baik'],
            ['Kualitas produk DC Clothing  tetap terjaga keawetannya meskipun dipakai dalam jangka waktu yang lama'],
            ['Anda memilih produk DC Clothing karena Kenyamanan dari bahan yang digunakan dalam produk tersebut'],
            ['Kemasan yang rapi dan baik sehingga terjaga kualitas produk'],
            ['Anda memilih produk DC Clothing karena Kualitas jahitan dari produk tersebut rapi, kuat dan bagus'],
            ['Produk DC Clothing yang diberikan mempunyai ciri tersendiri'],
            ['Varian warna dan ukuran tersedia sesuai dengan kebutuhan anda'],
            ['Harga produk yang di tawarkan beragam sehingga bisa di jangkau semua kalangan'],
            ['Hanya dengan melihat lambang atau logo DC Clothing Anda dapat membedakan dengan produk lain'],
            ['Anda membeli produk DC Clothing karena produk tersebut sesuai dengan keinginan Anda'],
            ['Produk DC Clothing mempunyai berbagai macam desain & model yang menarik'],
        	['Model produk DC Clothing mengikuti model saat ini'],
        ];

        $pegawai = App\Entities\Pegawai::inRandomOrder()->first();
        foreach ($kues as $key => $value) {
        	App\Entities\Kuesioner::create(['pegawai_id'=>$pegawai->id, 'soal'=>$value[0]]);
        }
    }
}
