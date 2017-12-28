<?php

use App\Entities\Kuesioner;
use App\Entities\Pelanggan;
use Illuminate\Database\Seeder;

class JawabanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pelanggan = Pelanggan::all();
        $kuesioner = Kuesioner::all();

        foreach ($pelanggan as $key => $p) {
        	$pel = Pelanggan::find($p->id);
        	foreach ($kuesioner as $k) {
        		$nilai = [1,2,3,4,5][rand(0,4)];
        		$pel->jawaban()->attach($k->id, ['nilai'=> $nilai]);
        	}
        }
    }
}
