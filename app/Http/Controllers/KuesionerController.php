<?php

namespace App\Http\Controllers;

use App\Entities\Kuesioner;
use App\Entities\Pelanggan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
            'soal' => 'required',
            'jawaban' => 'required'
        ]);
        $kuesioner = new Kuesioner();
        $kuesioner->soal = $request->soal;
        $kuesioner->jawaban = $request->jawaban;
        $kuesioner->save();

        return response()->json([
            'title' => 'Berhasil',
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
            'jawaban' => 'required'
        ]);
        $kuesioner = Kuesioner::find($id);
        $kuesioner->soal = $request->soal;
        $kuesioner->jawaban = $request->jawaban;
        $kuesioner->save();

        return response()->json([
            'title' => 'Berhasil',
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
            'title' => 'Berhasil',
            'message' => 'Data Berhasil Dihapus'
        ], 201);
    }


    //Hasil Kuesioner
    public function hasil()
    {
        $kuesioner = new Kuesioner();
        $kuesioner = $kuesioner->has('jawabans');

        $data = [];

        if (request()->kota) {
            $kota = request()->kota;
            $kuesioner = $kuesioner->with(['jawabans' => function($query) use($kota){
                $query->where('kota_id', $kota);
            }]);

            $responden = 0;
            $kuesioner = $kuesioner->get();

            // $data[] = $kuesioner;

            foreach ($kuesioner as $key => $value) {
                $row = [];
                $row['soal'] = $value->soal;

                $responden = count($value->jawabans);

                if ($responden > 0) {
                    // jawaban soal
                    $jawaban_soal = [];
                    foreach (json_decode($kuesioner[$key]->jawaban) as $key_jawab_soal => $j) {
                        $dt_ = [];

                        $dt_['jumlah_responden'] = $responden;
                        $dt_['label'] = $j->key;


                        //Jawaban Pelanggan
                        $jumlah_responden = 0;
                        foreach ($kuesioner[$key]->jawabans as $key_jawab => $jawaban) {
                            if ($j->value == $jawaban->pivot->nilai) {
                                $jumlah_responden++;
                            }
                        }
                        $dt_['jumlah_responden_perjawaban'] = $jumlah_responden;
                        $dt_['nilai'] = round(($jumlah_responden/$responden)*100, 2);


                        $jawaban_soal[] = $dt_;
                    }
                    $row['jawaban'] = $jawaban_soal;
                    $data[] = $row;  

                }

                                  
            }
            
        }else {

            foreach ($kuesioner->get() as $key_1 => $k) {
                // (totalResponden / jumlahResponden) * 100
                $row = [];
                $row['soal'] = $k->soal;

                $responden = $k->withCount('jawabans')->get();

                $dt = [];
                foreach (json_decode($k->jawaban) as $key => $j) { //JSON jawaban in quesioner
                    $dt_ = [];


                    $key_soal = $k->withCount(['jawabans' => function($query) use($j) {
                                $query->where('nilai', $j->value);
                            }])->get();
                    
                    $dt_['jumlah_responden'] = $jumlah_responden = $responden[$key_1]->jawabans_count;

                    // $dt_['nilai'] = $key_soal[$key_1]->jawabans_count;//round(($key_soal[$key_1]->jawaban_count/$jumlah_responden)*100, 2);
                    $dt_['nilai'] = round(($key_soal[$key_1]->jawabans_count/$jumlah_responden)*100, 2);
                    $dt_['label'] = json_decode($key_soal[$key_1]->jawaban)[$key]->key;
                    $dt[] = $dt_;
                }

                $row['jawaban'] = $dt;

                $data[] = $row;
            }

        }
        

        return response()->json($data);
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function jawab(Request $request)
    {
        $validate = [];
        $kuesioner = new Kuesioner();
        foreach ($kuesioner->all() as $key => $value) {
            $validate['jawaban.'.$key] = 'required';
        }
        
        $this->validate($request, $validate);
        $user_id = Auth::user()->id;
        $kue = Pelanggan::find($user_id);
        if ($kue->jawaban->isEmpty()) {
            
            foreach ($kuesioner->all() as $k => $v) {
                $v->jawabans()->attach($user_id, ['nilai' => $request->jawaban[$k]]);
            }

            return response()->json([
                'title'=> '',
                'message'=> 'Data Berhasil Ditambahkan',
                'kuesioner' => $kue->jawaban
            ], 201);
        }else{
            return response()->json([
                'title'=> '',
                'message'=> 'Anda Telah mengisi Kuesioner'
            ], 302);
        }
    }
}
