<?php

namespace App\Http\Controllers;

use App\Transaksi;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TransaksiController extends Controller
{
    public function index()
    {
    	$data = Transaksi::with('pelanggan')->with('produk')->paginate(20);
    	return response()->json($data);
    }

    public function store(Request $request)
    {
    	$this->validate($request, [
    		'pelanggan' => 'required',
    		// 'tanggal' => 'required',
    		'*.*.produk' => 'required',
            '*.*.qty' => 'required',
    		'*.*.sub_total' => 'required'
    	]);
        // return response()->json($request->detail);
        DB::transaction(function()use($request){
            $transaksi = Transaksi::create([
                'pelanggan_id' => $request->pelanggan,
                'tanggal' => Carbon::now(),
                // 'pega'
            ]);
            foreach ($request->detail as $key => $val) {
                $transaksi->produk()->attach($val['produk'], ['qty' => $val['qty'], 'sub_total' => $val['sub_total']]);
            }
        });

    	return response()->json([
    		'message' => 'Data Berhasil Ditambahkan',
    		'title' => 'Saved!'
    	], 201);	
    }
}
