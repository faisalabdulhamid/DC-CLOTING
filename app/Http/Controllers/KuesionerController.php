<?php

namespace App\Http\Controllers;

use App\Entities\Kuesioner;
use Illuminate\Http\Request;

class KuesionerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request()->wantsJson()) {
            $kuesioner = Kuesioner::paginate(10);
            
            return response()
                ->json($kuesioner);
        }
        $title = 'Kuesioner';
        $script = asset('js/kuesioner.js');        

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
            ->json(Kuesioner::init());
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
            'soal' => 'required',
            'pegawai_id' => 'required',
        ]);
        $kuesioner = new Kuesioner();
        $kuesioner->soal = $request->soal;
        $kuesioner->pegawai_id = $request->pegawai_id;
        $kuesioner->save();

        return response()->json([
            'message' => 'Data Berhasil Diubah'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Entities\Kuesioner  $kuesioner
     * @return \Illuminate\Http\Response
     */
    public function show(Kuesioner $kuesioner)
    {
        return response()->json($kuesioner, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Entities\Kuesioner  $kuesioner
     * @return \Illuminate\Http\Response
     */
    public function edit(Kuesioner $kuesioner)
    {
        return response()->json($kuesioner->edit(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Entities\Kuesioner  $kuesioner
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Kuesioner $kuesioner)
    {
        $this->validate($request, [
            'soal' => 'required',
            'pegawai_id' => 'required',
        ]);

        $kuesioner->soal = $request->soal;
        $kuesioner->pegawai_id = $request->pegawai_id;
        $kuesioner->save();

        return response()->json([
            'message' => 'Data Berhasil Diubah'
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Entities\Kuesioner  $kuesioner
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kuesioner $kuesioner)
    {
        $kuesioner->delete();

        return response()->json([
            'message' => 'Data Berhasil Dihapus'
        ], 201);
    }
}
