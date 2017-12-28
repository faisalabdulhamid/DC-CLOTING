<?php

namespace App\Http\Controllers;

use App\Entities\Pelanggan;
use Illuminate\Http\Request;

class PelangganController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request()->wantsJson()) {
            $pelanggan = Pelanggan::paginate(10);
            
            return response()
                ->json($pelanggan);
        }
        $title = 'Pelanggan';
        $script = asset('js/pelanggan.js');        

        return view('index', compact('script', 'title'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response()
            ->json(Pelanggan::init());
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
            'nama' => 'required',
            'no_telepon' => 'required|numeric|unique:pelanggan|min:12',
            'kota_id' => 'required',
        ]);

        $pelanggan = new Pelanggan();
        $pelanggan->nama = $request->nama;
        $pelanggan->no_telepon = $request->no_telepon;
        $pelanggan->kota_id = $request->kota_id;
        $pelanggan->save();

        return response()->json([
            'message' => 'Data Berhasil Ditambahkan'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Entities\Pelanggan  $pelanggan
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $pelanggan = Pelanggan::find($id);
        return response()->json($pelanggan, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Entities\Pelanggan  $pelanggan
     * @return \Illuminate\Http\Response
     */
    public function edit(Pelanggan $pelanggan)
    {
        return response()->json($pelanggan->edit(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Entities\Pelanggan  $pelanggan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pelanggan $pelanggan)
    {
        $this->validate($request, [
            'nama' => 'required',
            'no_telepon' => 'required|numeric|min:12',
            'kota_id' => 'required',
        ]);

        $pelanggan->nama = $request->nama;
        $pelanggan->no_telepon = $request->no_telepon;
        $pelanggan->kota_id = $request->kota_id;
        $pelanggan->save();

        return response()->json([
            'message' => 'Data Berhasil Diubah'
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Entities\Pelanggan  $pelanggan
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pelanggan = Pelanggan::find($id);
        $pelanggan->delete();

        return response()->json([
            'message' => 'Data Berhasil Dihapus'
        ], 201);
    }
}
