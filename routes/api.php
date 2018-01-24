<?php

use App\Entities\Kota;
use App\Entities\Kuesioner;
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
    // return \App\Entities\Pegawai::find($id);
});

// Route::apiResources(['pegawai'=>'PegawaiController']);
Route::group(['prefix' => 'dc'], function(){
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
		'except' => ['edit', 'create', 'update']
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
});


Route::get('produk', 'ProdukController@index');
Route::get('desain', 'DesainController@index');
Route::get('promosi', 'PromosiController@index');
Route::get('kuesioner', function(){
	$user_id = \Illuminate\Support\Facades\Auth::users()->id;
	$pelanggan = \App\Entities\Pelanggan::find($user_id);

	if ($pelanggan->has('jawaban')) {
		return response()->json([
			'title' => 'Pelanggan',
			'message' => 'Anda Telah Mengisi jawaban Kuesioner'
		], 401);
	}

	$kuesioner = Kuesioner::all();
	return response()->json($kuesioner, 200);
});//->middleware('auth:api');
Route::post('kuesioner/jawab', 'KuesionerController@jawab')->middleware('auth:api');
Route::put('desain/like/{id}', 'DesainController@like')->middleware('auth:api');
Route::put('desain/dislike/{id}', 'DesainController@dislike')->middleware('auth:api');