import { useEffect, useState } from "react";
import axios from "axios";

import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Alerta from "../components/alert/Alert";

// Estilo
import "./listar.css";

// Funcion tabla
export default function Listar() {
  // Guardo en el estado variables
  const [data, setData] = useState({
    error: false,
    success: false,
    dataFetch: [],
    msgError: "",
    msgOk: "",
    actualizarChange: false,
  });

  // Obtengo los datos de la tabla, con axios -> GET
  const fetchVehiculos = () => {
    axios
      .get("http://127.0.0.1:8000/api/vehiculos")
      .then(function (response) {
        setData({ ...data, dataFetch: response.data.vehiculos, error: false });
      })
      .catch(function (error) {
        setData({ ...data, msgError: error.mensaje, error: true });
        console.log(error);
      });
  };

  // Envio el id, para dar de baja, alta, eliminar
  const actualizarVehiculo = (id, param) => {
    axios
      .patch("http://127.0.0.1:8000/api/vehiculos/actualizar/" + id, {
        baja: param,
        id: id,
      })
      .then(function (response) {
        setData({
          ...data,
          success: true,
          msgOk: response.data.mensaje,
          actualizarChange: true,
          error: false,
        });
      })
      .catch(function (error) {
        setData({
          ...data,
          msgError: error.mensaje,
          error: true,
        });
      });
  };

  // Envio el id para eliminar
  const eliminarVehiculoM = (id, param) => {
    axios
      .delete("http://127.0.0.1:8000/api/vehiculos/eliminar/" + id, {
        baja: param,
        id: id,
      })
      .then(function (response) {
        setData({
          ...data,
          success: true,
          msgOk: response.data.mensaje,
          actualizarChange: true,
          error: false,
        });
      })
      .catch(function (error) {
        setData({
          ...data,
          msgError: error.mensaje,
          error: true,
        });
      });
  };

  // Doy de baja, cambio el estado del boton actualizar a falso
  const clickBaja = (id) => {
    setData({ ...data, actualizarChange: false });
    actualizarVehiculo(id, 1);
  };

  // Doy de alta, cambio el estado del boton actualizar a falso
  const clickAlta = (id) => {
    setData({ ...data, actualizarChange: false });
    actualizarVehiculo(id, 0);
  };

  // Elimino el vehiculo, cambio el estado del boton actualizar a falso (evito errores con los botones de actualizar)
  const eliminarVehiculo = (id) => {
    setData({ ...data, actualizarChange: false });
    eliminarVehiculoM(id, null);
  };

  // Cargo los datos despues del renderizado
  useEffect(() => {
    fetchVehiculos();

    // Actualizo el estado de los botones
    if (data.actualizarChange === true) {
      fetchVehiculos();
    }
  }, [data.actualizarChange]);

  return (
    <>
      <Card className="card">
        <Card.Body>
          {data.success ? (
            <Alerta tipo={"success"} mensaje={data.msgOk} />
          ) : null}

          {data.error ? (
            <Alerta tipo={"danger"} mensaje={data.msgError} />
          ) : null}

          <Card.Title>
            <h2>Flota De Vehículos</h2>
          </Card.Title>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tipo</th>
                <th>Cant Ruedas</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Patente</th>
                <th>Numero Chasis</th>
                <th>KMS Recorridos</th>
                <th>KMS P/ Mantenimiento</th>
                <th>Baja</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                // Devolvemos array con los datos [vehiculo]
                data.dataFetch?.map((vehiculo) => (
                  <tr key={vehiculo.id}>
                    <td>{vehiculo.id}</td>
                    <td>{vehiculo.tipo}</td>
                    <td>{vehiculo.cantidad_ruedas}</td>
                    <td>{vehiculo.marca}</td>
                    <td>{vehiculo.modelo}</td>
                    <td>{vehiculo.patente}</td>
                    <td>{vehiculo.numero_chasis}</td>
                    <td>{vehiculo.kms_recorridos}</td>
                    <td>{vehiculo.kms_mantenimiento}</td>
                    <td>{vehiculo.baja ? "Si" : "No"}</td>
                    <td>
                      {vehiculo.baja ? (
                        <Button
                          onClick={() => {
                            clickAlta(vehiculo.id);
                          }}
                          className="btnEdit"
                          variant="primary"
                        >
                          Dar Alta
                        </Button>
                      ) : (
                        <Button
                          onClick={() => {
                            clickBaja(vehiculo.id);
                          }}
                          className="btnEdit"
                          variant="warning"
                        >
                          Dar Baja
                        </Button>
                      )}

                      <Button
                        onClick={() => {
                          eliminarVehiculo(vehiculo.id);
                        }}
                        className="btnEdit"
                        variant="danger"
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}
