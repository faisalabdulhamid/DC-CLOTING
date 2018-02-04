<?php

namespace App\Http\Controllers;

use App\Entities\Desain;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class DesainController extends Controller
{
    public function index()
    {
    	$desain = new Desain();
    	$desain = $desain->with('desainable')->withCount(['like' => function($q){
            $q->where('suka', 1);
        }, 'dislike' => function($q){
            $q->where('suka', 0);
        }]);

        if (request()->client) {
            $desain = $desain->where('status', 1);
        }
        
        $desain=$desain->get();

    	return response()
    		->json($desain);
    }

    public function store(Request $request)
    {
    	$this->validate($request, [
            'gambar' => 'required',
        ]);

    	$user = Auth::user();

    	$desain = $user->desains()->create(['gambar' => $request->gambar]);

        return response()->json([
            'message' => 'Data Berhasil Ditambahkan'
        ], 201);
    }

    public function destroy($id)
    {
    	$desain = Desain::find($id);
        $desain->delete();

        return response()->json([
            'message' => 'Data Berhasil Dihapus'
        ], 201);
    }

    public function like(Request $request, $id)
    {
        $user_id = Auth::user()->id;
        $desain = Desain::find($id);
        $isLike = Desain::whereHas('like', function($q) use($user_id){
                    $q->where('pelanggan_id', $user_id);
                })->find($id);

        if (!is_null($isLike)) {
            return response()->json([
                'errors' => [],
                'message' => 'Anda Udah NgeLike or NgeUnLike Content Ini',
            ], 422);
        }
        
        $desain->like()->attach($user_id, ['suka' => 1]);

        return response()->json([
            'title' => 'berhasil!',
            'message' => 'Berhasil Di like',
        ], 201);
    }

    public function dislike(Request $request, $id)
    {
        $user_id = Auth::user()->id;
        $desain = Desain::find($id);
        $isLike = Desain::whereHas('like', function($q) use($user_id){
                    $q->where('pelanggan_id', $user_id);
                })->find($id);

        if (!is_null($isLike)) {
            return response()->json([
                'errors' => [],
                'message' => 'Anda Udah NgeLike or NgeUnLike Content Ini',
            ], 422);
        }
        
        $desain->dislike()->attach($user_id, ['suka' => 0]);

        return response()->json([
            'title' => 'berhasil!',
            'message' => 'Berhasil Di like'
        ], 201);
    }

    public function show($id)
    {
        $desain = new Desain();
        $desain = $desain->with('desainable')->withCount(['like' => function($q){
            $q->where('suka', 1);
        }, 'dislike' => function($q){
            $q->where('suka', 0);
        }])->where('id', $id)->get();

        return response()->json($desain);
    }

    public function edit($id)
    {
        $desain = Desain::find($id);
        $desain->status = (request()->tampil)? 1: 0;
        $desain->save();

        return response()->json([
            'title'=>'Updated!',
            'message' => 'Data Berhasil Di Ubah',
            'tampil' => request()->tampil
        ], 201);

    }

    public function uploadClient(Request $request)
    {
        $this->validate($request, [
            // 'title' => 'nullable|max:100',
            'photos' => 'required|file|max:2000', // max 2MB
        ]);

        $uploadedFile = $request->file('photos');
        

        // return $uploadedFile->getClientOriginalName();
        $filename = $uploadedFile->getClientOriginalName();
        if ($uploadedFile->isValid()) {
            $path = $uploadedFile->store('');
            // Storage::disk('desain')->put($filename);

            $user = Auth::user();

            $desain = $user->desains()->create(['gambar' => url('/img/desain/'.$path) ]);

            return url('/img/desain/'.$path);
        }
    }
}
