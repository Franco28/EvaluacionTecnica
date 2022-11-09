<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehiculos', function (Blueprint $table) {
            $table->id();
            $table->string('tipo');
            $table->integer('cantidad_ruedas');
            $table->string('marca');
            $table->string('modelo');
            $table->string('patente');
            $table->string('numero_chasis');
            $table->integer('kms_recorridos');
            $table->integer('kms_mantenimiento');
            $table->tinyInteger('baja');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('vehiculos');
    }
};
