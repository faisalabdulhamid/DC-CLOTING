<?php

namespace App\Http\Controllers;

use App\Entities\Produk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class ProdukController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request()->cari) {
            $produk = Produk::where('nama', 'LIKE', '%'.request()->cari.'%')
                ->orWhere('kode', 'LIKE', '%'.request()->cari.'%')
                ->paginate(10);
            
            return response()
                ->json($produk);
        }
        if (request()->all) {
            return response()->json(Produk::all());
        }
        if (request()->wantsJson()) {
            $produk = Produk::paginate(10);
            
            return response()
                ->json($produk);
        }
    }

    public function kategori($id)
    {
        if (request()->all) {
            $produk = Produk::whereHas('kategori', function ($query) use($id)
            {
                $query->where('id', $id);
            })->get();
            
            return response()->json($produk);
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
            'kategori' => 'required',
            'kode' => 'required|unique:produk',
            'nama' => 'required',
            'harga' => 'required|numeric',
            'gambar' => 'required|file|max:2000',
        ]);

        $gambar = $request->file('gambar');

        $filename = $gambar->getClientOriginalName();
        if ($gambar->isValid()) {
            $path = $gambar->store('');
            // Storage::disk('desain')->put($filename);

            // $desain = $user->desains()->create(['gambar' => url('/img/desain/'.$path) ]);

            $produk = new Produk();
            $produk->kategori_id = $request->kategori;
            $produk->kode = $request->kode;
            $produk->nama = $request->nama;
            $produk->harga = $request->harga;
            $produk->gambar = url('/img/desain/'.$path);
            $produk->pegawai_id = Auth::user()->id;
            $produk->save();

            return response()->json([
                'title' => 'Uploaded!',
                'message' => 'Data Berhasil Di tambahkan.',
                'url' => url('/img/desain/'.$path)
            ], 201);
            // return url('/img/desain/'.$path);
        }
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
            'kategori' => 'required',
            'kode' => 'required',
            'nama' => 'required',
            'harga' => 'required|numeric',
            'gambar' => 'required|max:2000',
        ]);

        $gambar = $request->file('gambar');

        $filename = $gambar->getClientOriginalName();
        
        if ($gambar->isValid()) {
            $path = $gambar->store('');

            $produk = Produk::find($id);
            $produk->kategori_id = $request->kategori;
            $produk->kode = $request->kode;
            $produk->nama = $request->nama;
            $produk->harga = $request->harga;
            $produk->gambar = url('/img/desain/'.$path);
            $produk->pegawai_id = Auth::user()->id;
            $produk->save();

            return response()->json([
                'title' => 'Uploaded!',
                'message' => 'Data Berhasil Diubah.',
                'url' => url('/img/desain/'.$path),
            ], 201);

        }
        return response()->json(['title']);
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
