<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class BuatTableJawabanKuesioner extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jawaban_kuesioner', function (Blueprint $table) {
            $table->unsignedInteger('kuesioner_id');
            $table->unsignedInteger('pelanggan_id');
            $table->tinyInteger('nilai');

            $table->foreign('pelanggan_id')
                ->references('id')
                ->on('pelanggan')
                ->onDelete('cascade');
            $table->foreign('kuesioner_id')
                ->references('id')
                ->on('kuesioner')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jawaban_kuesioner');
    }
}
