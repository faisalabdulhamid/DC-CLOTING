<?php

namespace App\Observers;

use App\Entities\Kuesioner;
use Illuminate\Support\Facades\Auth;

class KuesionerObserver
{
    public function creating(Kuesioner $kuesioner)
    {
    	$kuesioner->pegawai_id = Auth::user()->id;
    }

    public function updating(Kuesioner $kuesioner)
    {
    	$kuesioner->pegawai_id = Auth::user()->id;
    }
}
