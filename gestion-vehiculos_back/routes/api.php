<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\VehiculosController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Retorno los vehiculos con las funciones adjuntas, [index, actualizar, agregar, eliminar]
Route::apiResource('/vehiculos', VehiculosController::class)->only(['index', 'actualizar', 'agregar', 'eliminar']);

// Obtengo por parametro de url el id para dar de alta o de baja // HTTP -> PATCH
Route::patch('/vehiculos/actualizar/{id}', function (Request $request) {
    return VehiculosController::actualizar($request);
});

// Obtengo por parametro de url el id para eliminar // HTTP -> DELETE
Route::delete('/vehiculos/eliminar/{id}', function (Request $request) {
    return VehiculosController::eliminar($request);
});

// Obtengo por parametro de url el id para eliminar // HTTP -> POST
Route::post('/vehiculos/agregar', function (Request $request) {
    return VehiculosController::agregar($request);
});
