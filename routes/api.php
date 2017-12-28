<?php

use App\Entities\Kota;
use App\Http\Resources\KotaResource;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::apiResources(['pegawai'=>'PegawaiController']);
Route::resource('pegawai', 'PegawaiController', [
	// 'only' => ['index', 'show', 'store', 'update', 'destroy'],
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

Route::get('/hasil-kuesioner', 'KuesionerController@hasil');
	//->middleware('auth:api');

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

