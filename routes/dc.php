<?php

use App\Entities\Kota;
use App\Entities\Kuesioner;
use App\Http\Resources\KotaResource;
use Illuminate\Http\Request;

Route::get('user', function (Request $request)
{
	return $request->all();
})->middleware('auth:api');

Route::resource('pegawai', 'PegawaiController', [
	'except' => ['edit', 'create'],
])->middleware('auth:api');

Route::resource('pelanggan', 'PelangganController', [
	'except' => ['edit', 'create']
])->middleware('auth:api');

Route::resource('provinsi', 'ProvinsiController', [
	'except' => ['edit', 'create']
])->middleware('auth:api');
Route::resource('kota', 'KotaController', [
	'except' => ['edit', 'create']
])->middleware('auth:api');
Route::resource('kategori', 'KategoriController', [
	'except' => ['edit', 'create']
])->middleware('auth:api');
Route::resource('produk', 'ProdukController', [
	'except' => ['edit', 'create']
])->middleware('auth:api');
Route::resource('kuesioner', 'KuesionerController', [
	'except' => ['edit', 'create']
])->middleware('auth:api');
Route::resource('promosi', 'PromosiController', [
	'except' => ['edit', 'create']
])->middleware('auth:api');
Route::get('/hasil-kuesioner', 'KuesionerController@hasil')
	->middleware('auth:api');
Route::resource('desain', 'DesainController', [
	'except' => ['create', 'update']
])->middleware('auth:api');

Route::resource('transaksi', 'TransaksiController', [
	'except' => ['create', 'edit', 'update', 'destroy']
])->middleware('auth:api');

Route::middleware('auth:api')->prefix('select')->group(function(){
	Route::get('provinsi', function(){
		$provinsi = App\Entities\Provinsi::all();
		return response()->json($provinsi);
	});
	Route::get('kota', function(){
		$kota = App\Entities\Kota::all();
		return response()->json($kota);
	});
	Route::get('kategori', function(){
		$kategori = App\Entities\Kategori::all();
		return response()->json($kategori);
	});
});