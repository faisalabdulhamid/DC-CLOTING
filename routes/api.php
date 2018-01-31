<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/dc', function (Request $request) {
    return \Illuminate\Support\Facades\Auth::user();
});
Route::middleware('auth:client')->get('/client', function (Request $request) {
    return \Illuminate\Support\Facades\Auth::user();
});