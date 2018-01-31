<?php

use Illuminate\Http\Request;

Route::get('user', function(Request $request){
	return $request->user;
})->middleware('auth:client');

Route::get('produk', 'ProdukController@index');
Route::get('desain', 'DesainController@index');
Route::get('promosi', 'PromosiController@index');

Route::get('kuesioner', function(){
	$user_id = \Illuminate\Support\Facades\Auth::user()->id;
	$pelanggan = \App\Entities\Pelanggan::find($user_id);

	// if ($pelanggan->has('jawaban')) {
	// 	return response()->json([
	// 		'title' => 'Pelanggan',
	// 		'message' => 'Anda Telah Mengisi jawaban Kuesioner'
	// 	], 401);
	// }
	$kuesioner = \App\Entities\Kuesioner::all();
	return response()->json($kuesioner, 200);
})->middleware('auth:client');

Route::post('kuesioner/jawab', 'KuesionerController@jawab')->middleware('auth:client');
Route::put('desain/like/{id}', 'DesainController@like')->middleware('auth:client');
Route::put('desain/dislike/{id}', 'DesainController@dislike')->middleware('auth:client');