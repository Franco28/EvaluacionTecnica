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

// Obtengo por parametro de url el id para dar de baja
Route::post('/vehiculos/baja/{id}', function (Request $request) {
    return VehiculosController::actualizar($request);
});

// Obtengo por parametro de url el id para dar de alta
Route::post('/vehiculos/alta/{id}', function (Request $request) {
    return VehiculosController::actualizar($request);
});

// Obtengo por parametro de url el id para eliminar
Route::post('/vehiculos/eliminar/{id}', function (Request $request) {
    return VehiculosController::eliminar($request);
});

// Obtengo por parametro de url el id para eliminar
Route::post('/vehiculos/agregar', function (Request $request) {
    return VehiculosController::agregar($request);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
