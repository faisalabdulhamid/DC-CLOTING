<?php

namespace App\Observers;

use App\Entities\Promosi;
use Illuminate\Support\Facades\Auth;

class PromosiObserver
{
    public function creating(Promosi $promosi)
    {
    	$promosi->pegawai_id = Auth::user()->id;
    }

    public function updating(Promosi $promosi)
    {
    	$promosi->pegawai_id = Auth::user()->id;
    }
}
