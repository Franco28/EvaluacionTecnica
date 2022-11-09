<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehiculos extends Model
{
    use HasFactory;

    /**
     * Tabla del modelo (vehiculos)
     *
     * @var string
     */
    protected $table = 'vehiculos';

    /**
     * Clave primaria de la tabla
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * Auto incremento de la ID
     *
     * @var bool
     */
    public $incrementing = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'tipo',
        'cantidad_ruedas',
        'marca',
        'modelo',
        'patente',
        'numero_chasis',
        'kms_recorridos',
        'kms_mantenimiento',
        'baja',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [];
}
