import { useEffect, useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Cards from "../components/card/card";
import Alerta from "../components/alert/Alert";

import "./agregar.css";

export default function Agregar() {
  // Guardo en el estado variables
  const [data, setData] = useState({
    error: false,
    success: false,
    msgError: "",
    msgOk: "",
  });

  // Limpio los input, paso el event con los datos
  // con foreach cambio los inputs a ""
  const limpiarInputs = (event) => {
    Array.from(event.target).forEach((e) => (e.value = ""));
  };

  // Envio el id, para dar de baja, alta, eliminar
  const crearVehiculo = (event) => {
    event.preventDefault(); // Prevenimos que se refresque la pagina

    axios
      .post("http://127.0.0.1:8000/api/vehiculos/agregar", {
        tipovehiculo: event.target.tipovehiculo.value,
        cantidadruedas: event.target.cantidadruedas.value,
        marca: event.target.marca.value,
        modelo: event.target.modelo.value,
        patente: event.target.patente.value,
        chasis: event.target.chasis.value,
        kmsrecorridos: event.target.kmsrecorridos.value,
        kmsproxmantenimiento: event.target.kmsproxmantenimiento.value,
      })
      .then(function (response) {
        setData({
          ...data,
          success: true,
          msgOk: response.data.mensaje,
          error: false,
        });
        limpiarInputs(event);
      })
      .catch(function (error) {
        setData({
          ...data,
          msgError: error.mensaje,
          error: true,
        });
      });
  };

  useEffect(() => {
    document.title = "Agregar Nuevo Vehículo | Gestión De Vehículos";
  }, []);

  return (
    <>
      {data.success ? <Alerta tipo={"success"} mensaje={data.msgOk} /> : null}
      {data.error ? <Alerta tipo={"danger"} mensaje={data.msgError} /> : null}

      <Cards
        title={"Agregar Vehículo Nuevo"}
        data={
          <Form onSubmit={crearVehiculo}>
            <div className="row">
              <Form.Group
                className="col-md-4 mb-3"
                controlId="formTipoVehiculo"
              >
                <Form.Label>Tipo De Vehículo</Form.Label>
                <Form.Control
                  name="tipovehiculo"
                  type="text"
                  placeholder="Ingrese Tipo De Vehículo"
                  required
                />
              </Form.Group>

              <Form.Group className="col-md-4 mb-3" controlId="formCantRuedas">
                <Form.Label>Cantidad De Ruedas</Form.Label>
                <Form.Control
                  name="cantidadruedas"
                  type="number"
                  placeholder="Ingrese cantidad de ruedas"
                  required
                />
              </Form.Group>

              <Form.Group className="col-md-4 mb-3" controlId="formMarca">
                <Form.Label>Marca</Form.Label>
                <Form.Control
                  name="marca"
                  type="text"
                  placeholder="Ingrese la marca"
                  required
                />
              </Form.Group>

              <Form.Group className="col-md-4 mb-3" controlId="formTipoModelo">
                <Form.Label>Modelo</Form.Label>
                <Form.Control
                  name="modelo"
                  type="text"
                  placeholder="Ingrese el modelo"
                  required
                />
              </Form.Group>

              <Form.Group className="col-md-4 mb-3" controlId="formTipoPatente">
                <Form.Label>Patente</Form.Label>
                <Form.Control
                  name="patente"
                  type="text"
                  placeholder="Ingrese la patente"
                  required
                />
              </Form.Group>

              <Form.Group className="col-md-4 mb-3" controlId="formChasis">
                <Form.Label>N° Chasis</Form.Label>
                <Form.Control
                  name="chasis"
                  type="text"
                  placeholder="Ingrese n° de chasis"
                  required
                />
              </Form.Group>

              <Form.Group
                className="col-md-4 mb-3"
                controlId="formKMSRecorridos"
              >
                <Form.Label>KMs Recorridos</Form.Label>
                <Form.Control
                  name="kmsrecorridos"
                  type="number"
                  placeholder="Ingrese los kilometros recorridos"
                  required
                />
              </Form.Group>

              <Form.Group
                className="col-md-4 mb-3"
                controlId="formKMSProximoMantenimiento"
              >
                <Form.Label>KMs de próximo mantenimiento</Form.Label>
                <Form.Control
                  name="kmsproxmantenimiento"
                  type="number"
                  placeholder="Ingrese KMs de próximo mantenimiento preventivo"
                  required
                />
              </Form.Group>
            </div>
            <Button className="btnSubmit" variant="primary" type="submit">
              Crear Vehículo
            </Button>
          </Form>
        }
      />
    </>
  );
}
