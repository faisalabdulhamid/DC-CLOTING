<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

Route::get('user', function(Request $request){
	// return $request->user;
	return Illuminate\Support\Facades\Auth::user();
})->middleware('auth:client');

Route::post('api_token', 'LoginController@index');

Route::get('produk', 'ProdukController@index');
Route::get('desain', 'DesainController@index');
Route::get('promosi', 'PromosiController@index');

Route::get('kuesioner', function(){
	$user_id = \Illuminate\Support\Facades\Auth::user()->id;
	$pelanggan = \App\Entities\Pelanggan::find($user_id);
	
	$kuesioner = \App\Entities\Kuesioner::all();
	return response()->json($kuesioner, 200);
})->middleware('auth:client');

Route::post('kuesioner/jawab', 'KuesionerController@jawab')->middleware('auth:client');
Route::put('desain/like/{id}', 'DesainController@like')->middleware('auth:client');
Route::put('desain/dislike/{id}', 'DesainController@dislike')->middleware('auth:client');

Route::post('desain/upload', 'DesainController@uploadClient')->middleware('auth:client');