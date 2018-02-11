<?php

Route::get('/', function(){
	return view('application.index');
});
Route::get('/login', function(){
	return view('application.client');
});

Route::get('/client/kategori', function ()
{
	return App\Entities\Kategori::all();
});