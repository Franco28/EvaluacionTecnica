<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class VehiculosFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'tipo' => "Camión",
            'cantidad_ruedas' => rand(1, 4),
            'marca' => "Ford",
            'modelo' => "Modelo 2021",
            'patente' => "AF 390 HA",
            'numero_chasis' => "A9S092J34921J3J",
            'kms_recorridos' => rand(1, 50000),
            'kms_mantenimiento' => rand(1, 10000),
            'baja' => rand(0, 1),
        ];
    }
}
