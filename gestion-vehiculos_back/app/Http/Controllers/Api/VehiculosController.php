<?php

namespace App\Http\Controllers\Api;

use Exception;
use App\Http\Controllers\Controller;
use App\Models\Vehiculos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VehiculosController extends Controller
{

    /**
     * Funcion -> index
     * Retorno los vehiculos, si existe, sino vacio
     *
     * @return      object json
     */
    public function index()
    {
        // Envio la lista de los vehiculos
        $vehiculos = DB::table('vehiculos')->get();

        return response()->json(["vehiculos" => $vehiculos], 200);
    }

    /**
     * Funcion -> agregar
     * Agregamos un nuevo vehiculo a la tabla
     *
     *
     * @param       Request $request
     *
     * @return      object json
     */
    public static function agregar(Request $request)
    {
        try {
            $vehiculo = Vehiculos::create([
                'tipo' => $request->tipovehiculo,
                'cantidad_ruedas' => $request->cantidadruedas,
                'marca' => $request->marca,
                'modelo' => $request->modelo,
                'patente' => $request->patente,
                'numero_chasis' => $request->chasis,
                'kms_recorridos' => $request->kmsrecorridos,
                'kms_mantenimiento' => $request->kmsproxmantenimiento,
                'baja' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $vehiculo->save();

            // Retorno response OK
            return response()->json(["mensaje" => "Vehículo [$request->tipovehiculo] agregado correctamente!"], 200);
        } catch (Exception $er) {
            // Retorno response ERROR
            return response()->json(["mensaje" => "No se pudo agregar el vehículo [$request->tipovehiculo]"], 401);
        }

        // Retorno response ERROR
        return response()->json(["mensaje" => "No se pudo agregar el vehículo [$request->tipovehiculo]"], 401);
    }

    /**
     * Funcion -> actualizar (dar de -> alta / baja)
     * Verificamos que el $request->baja sea un numero, debe ser 0 o 1 (true, false)
     *
     *
     * @param       Request $request
     *
     * @return      object json
     */
    public static function actualizar(Request $request)
    {
        try {
            // Busco el vehiculo por su ID
            $vehiculo = Vehiculos::find($request->id);

            // Verifico que sea un numero
            if (is_numeric($request->baja)) {
                // Actualizo valor
                $vehiculo->baja = $request->baja;
            }

            // Guardo
            $vehiculo->save();

            // Retorno response OK
            if ($request->baja == 1) {
                return response()->json(["mensaje" => "Se dió de baja el vehículo ID $request->id"], 200);
            } else if (is_numeric($request->baja) && $request->baja == 0) { // Retorno response OK
                return response()->json(["mensaje" => "Se dió de alta el vehículo ID $request->id"], 200);
            }
        } catch (Exception $er) {
            // Retorno response ERROR
            if ($request->baja == 1) {
                return response()->json(["mensaje" => "No se pudo dar de baja"], 401);
            } else { // Retorno response ERROR
                return response()->json(["mensaje" => "No se pudo dar de alta"], 401);
            }
        }
    }

    /**
     * Funcion -> eliminar
     * Eliminamos de la tabla mediante el $request->id (ID)
     *
     *
     * @param       Request $request
     *
     * @return      object json
     */
    public static function eliminar(Request $request)
    {
        try {

            // Busco el vehiculo por su ID
            $vehiculo = Vehiculos::find($request->id);

            // Elimino de la tabla (base de datos)
            $vehiculo->delete();

            // Retorno response OK
            return response()->json(["mensaje" => "Se eliminó el vehículo ID $request->id"], 200);
        } catch (Exception $er) {
            // Retorno response ERROR
            return response()->json(["mensaje" => "No se pudo eliminar el vehículo ID $request->id"], 401);
        }

        // Retorno response ERROR
        return response()->json(["mensaje" => "No se pudo eliminar el vehículo ID $request->id"], 401);
    }
}
