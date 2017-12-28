<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class BuatTableLike extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('like', function (Blueprint $table) {
            // $table->increments('id');
            // $table->timestamps();
            $table->unsignedInteger('pelanggan_id');
            $table->unsignedInteger('desain_id');

            $table->foreign('pelanggan_id')
                ->references('id')
                ->on('pelanggan')
                ->onDelete('cascade');

            $table->foreign('desain_id')
                ->references('id')
                ->on('desain')
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
        Schema::dropIfExists('like');
    }
}
