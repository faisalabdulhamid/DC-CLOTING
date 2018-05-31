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
        if (request()->cari) {
            $pelanggan = Pelanggan::with('kota.provinsi')
                // ->whereHas('kota', function ($query)
                // {
                //     $query->where('kota', 'LIKE', '%'.request()->cari.'%');
                // })
                // ->whereHas('kota.provinsi', function ($query)
                // {
                //     $query->where('provinsi', 'LIKE', '%'.request()->cari.'%');
                // })
                ->where('nama', 'LIKE', '%'.request()->cari.'%')
                ->orWhere('no_telepon', 'LIKE', '%'.request()->cari.'%')
                ->paginate(10);

            return response()->json($pelanggan);
        }

        if (request()->all) {
            return response()->json(Pelanggan::all());
        }
        if (request()->wantsJson()) {
            $pelanggan = Pelanggan::with('kota.provinsi')->paginate(10);
            
            return response()
                ->json($pelanggan);
        }
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
            'kota' => 'required',
            'provinsi' => 'required',
        ]);

        $pelanggan = new Pelanggan();
        $pelanggan->nama = $request->nama;
        $pelanggan->no_telepon = $request->no_telepon;
        $pelanggan->provinsi_id = $request->provinsi;
        $pelanggan->kota_id = $request->kota;
        $pelanggan->api_token = bcrypt($request->no_telepon);
        $pelanggan->save();

        return response()->json([
            'title' => 'Berhasil',
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
        $pelanggan = [
            'nama' => $pelanggan->nama,
            'no_telepon' => $pelanggan->no_telepon,
            'provinsi' => $pelanggan->provinsi_id,
            'kota' => $pelanggan->kota_id
        ];
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
            'kota' => 'required',
            'provinsi' => 'required',
        ]);

        $pelanggan->nama = $request->nama;
        $pelanggan->no_telepon = $request->no_telepon;
        $pelanggan->kota_id = $request->kota;
        $pelanggan->save();

        return response()->json([
            'title' => 'Berhasil',
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
            'title' => 'Berhasil',
            'message' => 'Data Berhasil Dihapus'
        ], 201);
    }
}
