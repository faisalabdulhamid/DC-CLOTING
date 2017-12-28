<?php

namespace App\Http\Controllers;

use App\Entities\Kota;
use Illuminate\Http\Request;

class KotaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request()->wantsJson()) {
            $kotum = Kota::paginate(10);
            
            return response()
                ->json($kotum);
        }
        $title = 'Kota';
        $script = asset('js/kota.js');        

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
            ->json(Kota::init());
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
            'kota' => 'required',
            'provinsi_id' => 'required',
        ]);

        $kotum = new Kota();
        $kotum->kota = $request->kota;
        $kotum->provinsi_id = $request->provinsi_id;
        $kotum->save();

        return response()->json([
            'message' => 'Data Berhasil Ditambahkan'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Entities\Kota  $kotum
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $kotum = Kota::with('provinsi')->get()->find($id);
        return response()->json($kotum, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Entities\Kota  $kotum
     * @return \Illuminate\Http\Response
     */
    public function edit(Kota $kotum)
    {
        return response()->json($kotum->edit(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Entities\Kota  $kotum
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Kota $kotum)
    {
        $this->validate($request, [
            'kota' => 'required',
            'provinsi_id' => 'required',
        ]);

        $kotum->kota = $request->kota;
        $kotum->provinsi_id = $request->provinsi_id;
        $kotum->save();

        return response()->json([
            'message' => 'Data Berhasil Diubah'
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Entities\Kota  $kotum
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kota $kotum)
    {
        $kotum->delete();
        
        return response()->json([
            'message' => 'Data Berhasil Dihapus'
        ], 201);
    }
}
