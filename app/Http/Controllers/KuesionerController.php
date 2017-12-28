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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'soal' => 'required'
        ]);
        $kuesioner = new Kuesioner();
        $kuesioner->soal = $request->soal;
        $kuesioner->save();

        return response()->json([
            'message' => 'Data Berhasil Ditambahkan'
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
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'soal' => 'required',
        ]);
        $kuesioner = Kuesioner::find($id);
        $kuesioner->soal = $request->soal;
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


    //Hasil Kuesioner
    public function hasil()
    {
        $kuesioner = new Kuesioner();
        $kuesioner = $kuesioner
                        ->has('jawaban')
                        ->get();
        $data = [];
        foreach ($kuesioner as $key => $k) {
            // (totalResponden / jumlahResponden) * 100
            $row = [];
            $row['soal'] = $k->soal;
            $responden = $k->withCount('jawaban')
                                        ->get();
            $sangat_perlu = $k->withCount(['jawaban' => function($query){
                            $query->where('nilai', 1);
                        }])->get();
            $perlu = $k->withCount(['jawaban' => function($query){
                            $query->where('nilai', 2);
                        }])->get();
            $cukup = $k->withCount(['jawaban' => function($query){
                            $query->where('nilai', 3);
                        }])->get();
            $tidak_perlu = $k->withCount(['jawaban' => function($query){
                            $query->where('nilai', 4);
                        }])->get();
            $sangat_tidak_perlu = $k->withCount(['jawaban' => function($query){
                            $query->where('nilai', 5);
                        }])->get();
            $jumlah_responden = $responden[$key]->jawaban_count;
            // $row['jumlah_responden'] = $jumlah_responden;
            $dt = [];
            $dt_ = [];
            $dt_['nilai'] = round(($sangat_perlu[$key]->jawaban_count/$jumlah_responden)*100, 2);
            $dt_['label'] = 'Sangat Perlu';
            $dt[] = $dt_;

            $dt_ = [];
            $dt_['nilai'] = round(($perlu[$key]->jawaban_count/$jumlah_responden)*100, 2);
            $dt_['label'] = 'Perlu';
            $dt[] = $dt_;

            $dt_ = [];
            $dt_['nilai'] = round(($cukup[$key]->jawaban_count/$jumlah_responden)*100, 2);
            $dt_['label'] = 'Cukup';
            $dt[] = $dt_; 

            $dt_ = [];
            $dt_['nilai'] = round(($tidak_perlu[$key]->jawaban_count/$jumlah_responden)*100, 2);
            $dt_['label'] = 'Tidak Perlu';
            $dt[] = $dt_; 

            $dt_ = [];
            $dt_['nilai'] = round(($sangat_tidak_perlu[$key]->jawaban_count/$jumlah_responden)*100, 2);
            $dt_['label'] = 'Sangat Tidak Perlu';
            $dt[] = $dt_; 

            $row['jawaban'] = $dt;
            
            // $row['']

            $data[] = $row;
        }

        return response()->json($data);
    }
}
