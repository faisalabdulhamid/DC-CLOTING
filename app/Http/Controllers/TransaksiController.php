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
        if (request()->cari) {
            $data = Transaksi::with(['produk', 'pelanggan'])
                ->whereHas('pelanggan', function($q){
                    $q->where('nama', 'LIKE', '%'.request()->cari.'%');
                })
                ->paginate(20);
            
            return response()->json($data);
        }
    	$data = Transaksi::with(['pelanggan', 'produk'])->paginate(20);
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

    public function show($id)
    {
        $transaksi = Transaksi::with('produk')->find($id);

        //{produk: '', harga: 0, sub_total: 0, qty: 1}
        $data['pelanggan'] = $transaksi->pelanggan_id;
        foreach ($transaksi->produk as $key => $value) {
            $data['detail'][$key]['produk'] = $value->id;
            $data['detail'][$key]['harga'] = $value->harga;
            $data['detail'][$key]['qty'] = $value->pivot->qty;
        }


        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'pelanggan' => 'required',
            // 'tanggal' => 'required',
            '*.*.produk' => 'required',
            '*.*.qty' => 'required',
            '*.*.sub_total' => 'required'
        ]);
        // return response()->json($request->detail);
        DB::transaction(function()use($request, $id){
            $transaksi = Transaksi::find($id)->create([
                'pelanggan_id' => $request->pelanggan,
            ]);

            foreach ($request->detail as $key => $val) {
                $transaksi->produk()->sync($val['produk'], ['qty' => $val['qty'], 'sub_total' => $val['sub_total']]);
            }
        });

        return response()->json([
            'message' => 'Data Berhasil Diubah',
            'title' => 'Saved!'
        ], 201);    
    }
}
