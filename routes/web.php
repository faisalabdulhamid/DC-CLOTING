<?php

Auth::routes();

Route::get('/', function () {
	$title = config('app.name');
	$script  = '';
    return view('home', compact('title', 'script'));
})->name('home')->middleware('auth');

// Route::get('/home', 'HomeController@index')->name('home');
Route::get('/kota', 'KotaController@index')->name('kota')->middleware('auth');
Route::get('/pegawai', 'PegawaiController@index')->name('pegawai')->middleware('auth');
Route::get('/pelanggan', 'PelangganController@index')->name('pelanggan')->middleware('auth');
Route::get('/kuesioner', 'KuesionerController@index')->name('kuesioner')->middleware('auth');
