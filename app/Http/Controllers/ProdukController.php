<?php

namespace App\Http\Controllers;

use App\Entities\Produk;
use Illuminate\Http\Request;

class ProdukController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request()->all) {
            return response()->json(Produk::all());
        }
        if (request()->wantsJson()) {
            $produk = Produk::paginate(10);
            
            return response()
                ->json($produk);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'kategori_id' => 'required',
            'kode' => 'required|unique:produk',
            'nama' => 'required',
            'harga' => 'required|numeric',
            'gambar' => 'required',
        ]);

        $produk = new Produk();
        $produk->kategori_id = $request->kategori;
        $produk->kode = $request->kode;
        $produk->nama = $request->nama;
        $produk->harga = $request->harga;
        $produk->gambar = $request->gambar;
        $produk->save();

        return response()->json([
            'message' => 'Data Berhasil Ditambahkan'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $produk = Produk::with('kategori')->get()->find($id);

        $produk = [
            'id' => $produk->id,
            'kode' => $produk->kode,
            'nama' => $produk->nama,
            'harga' => $produk->harga,
            'gambar' => $produk->gambar,
            'kategori' => $produk->kategori_id,
        ];

        return response()->json($produk);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $produk = Produk::find($id);
        return response()->json($produk);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'kategori_id' => 'required',
            'kode' => 'required|unique:produk',
            'nama' => 'required',
            'harga' => 'required|numeric',
            'gambar' => 'required',
        ]);

        $produk = Produk::find($id);
        $produk->kategori_id = $request->kategori;
        $produk->kode = $request->kode;
        $produk->nama = $request->nama;
        $produk->harga = $request->harga;
        $produk->gambar = $request->gambar;
        $produk->save();

        return response()->json([
            'message' => 'Data Berhasil diubah'
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $produk = Produk::find($id);
        $produk->delete();

        return response()->json([
            'message' => 'Data Berhasil Dihapus'
        ], 201);
    }
}
