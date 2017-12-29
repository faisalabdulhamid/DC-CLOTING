<?php

namespace App\Providers;

use App\Entities\Kuesioner;
use App\Entities\Produk;
use App\Entities\Promosi;
use App\Observers\KuesionerObserver;
use App\Observers\ProdukObserver;
use App\Observers\PromosiObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Kuesioner::observe(KuesionerObserver::class);
        Produk::observe(ProdukObserver::class);
        Promosi::observe(PromosiObserver::class);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
