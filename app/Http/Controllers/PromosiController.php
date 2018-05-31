<?php

namespace App\Http\Controllers;

use App\Entities\Promosi;
use Illuminate\Http\Request;

class PromosiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request()->cari) {
            $promosi = Promosi::where('mulai_promosi', 'LIKE', '%' . request()->cari . '%')
                ->orWhere('akhir_promosi', 'LIKE', '%' . request()->cari . '%')
                ->paginate(10);

            return response()
                ->json($promosi);
        }

        if (request()->all) {
            $promosi = Promosi::tampil()->get();

            return response()
                ->json($promosi);
        }

        if (request()->wantsJson()) {
            $promosi = Promosi::paginate(10);

            return response()
                ->json($promosi);
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
            'subjek'        => 'required',
            'isi_promosi'   => 'required',
            'mulai_promosi' => 'required|date',
            'akhir_promosi' => 'required|date',
            'gambar'        => 'required',
        ]);

        $gambar = $request->file('gambar')->store('', 'img');

        Promosi::create([
            'subjek'        => $request->subjek,
            'isi_promosi'   => $request->isi_promosi,
            'mulai_promosi' => $request->mulai_promosi,
            'akhir_promosi' => $request->akhir_promosi,
            'status'        => $request->status,
            'gambar'        => '/img/' . $gambar,
        ]);

        return response()->json([
            'title'   => 'Berhasil',
            'message' => 'Data Berhasil Ditambahkan',
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
        $promosi = Promosi::find($id);
        return response()->json($promosi);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
            'subjek'        => 'required',
            'isi_promosi'   => 'required',
            'mulai_promosi' => 'required|date',
            'akhir_promosi' => 'required|date',
            'gambar'        => 'required',
        ]);

        $promosi = Promosi::find($id);
        // $promosi->update($request->all());
        $gambar = $request->file('gambar')->store('', 'img');

        $promosi->update([
            'subjek'        => $request->subjek,
            'isi_promosi'   => $request->isi_promosi,
            'mulai_promosi' => $request->mulai_promosi,
            'akhir_promosi' => $request->akhir_promosi,
            'status'        => $request->status,
            'gambar'        => '/img/' . $gambar,
        ]);

        return response()->json([
            'title'   => 'Berhasil',
            'message' => 'Data Berhasil Diubah',
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
        Promosi::find($id)->delete();

        return response()->json([
            'title'   => 'Berhasil',
            'message' => 'Data Berhasil Dihapus',
        ], 201);
    }
}
