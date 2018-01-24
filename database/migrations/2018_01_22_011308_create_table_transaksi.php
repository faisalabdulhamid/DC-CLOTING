<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableTransaksi extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaksi', function (Blueprint $table) {
            $table->increments('id');
            $table->date('tanggal');
            $table->unsignedInteger('pelanggan_id')->nullable();
            $table->unsignedInteger('pegawai_id');
            $table->timestamps();

            $table->foreign('pelanggan_id')
                ->references('id')
                ->on('pelanggan')
                ->onDelete('cascade');
            $table->foreign('pegawai_id')
                ->references('id')
                ->on('pegawai')
                ->onDelete('cascade');
        });
        Schema::create('transaksi_detail', function (Blueprint $table)
        {
            $table->unsignedInteger('sub_total');
            $table->unsignedInteger('qty');
            $table->unsignedInteger('transaksi_id');
            $table->unsignedInteger('produk_id');

            $table->foreign('transaksi_id')
                ->references('id')
                ->on('transaksi')
                ->onDelete('cascade');
            $table->foreign('produk_id')
                ->references('id')
                ->on('produk')
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
        Schema::dropIfExists('transaksi_detail');
        Schema::dropIfExists('transaksi');
    }
}
