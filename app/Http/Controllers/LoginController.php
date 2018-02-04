<?php

namespace App\Http\Controllers;

use App\Entities\Pelanggan;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function index(Request $request)
    {
    	if (is_null($request->no_telepon)) {
    		return response()->json([
    			'title' => 'Error',
    			'message' => 'No Telepon Tidak Boleh Kosong'
    		], 401);
    	}

    	$user = Pelanggan::where('no_telepon', $request->no_telepon)->first();

    	if (is_null($user)) {
    		return response()->json([
    			'title' => 'Error',
    			'message' => 'No Telepon Tidak Terdaftar'
    		], 401);
    	}

    	return response()->json($user);
    }
}
