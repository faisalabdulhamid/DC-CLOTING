<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ProvinsiSeeder::class);
        $this->call(KotaSeeder::class);

        factory(App\Entities\Pegawai::class, 10)->create();
        factory(App\Entities\Pelanggan::class, 100)->create();

        $this->call(KuesionerSeeder::class);
        $this->call(KategoriSeeder::class);
        $this->call(ProdukSeeder::class);
        $this->call(JawabanSeeder::class);
        $this->call(PromosiSeeder::class);
    }
}
