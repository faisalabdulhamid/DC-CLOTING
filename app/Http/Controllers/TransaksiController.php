<?php

namespace App\Http\Controllers;

use App\Transaksi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TransaksiController extends Controller
{
    public function index()
    {
    	$data = Transaksi::paginate(20);
    	return response()->json($data);
    }

    public function store(Request $request)
    {
    	$this->validate($request, [
    		'pelanggan' => 'required',
    		'tanggal' => 'required',
    		'*.*.produk_id' => 'required',
            '*.*.qty' => 'required',
    		'*.*.sub_total' => 'required'
    	]);

        DB::transaction(function(){
            $transaksi = Transaksi::create([
                'pelanggan_id' => $request->pelanggan,
                'tanggal' => $request->tanggal
            ]);
            foreach ($request->pesanan as $key => $val) {
                $transaksi->produk->attach($val['produk_id'], ['qty' => $val['qty'], 'sub_total' => $val['sub_total']]);
            }
        });

    	return response()->json([
    		'message' => 'Data Berhasil Ditambahkan',
    		'title' => 'Saved!'
    	], 201);	
    }
}
