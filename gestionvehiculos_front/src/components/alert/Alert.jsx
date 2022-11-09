import React from "react";
import Alert from "react-bootstrap/Alert";

export default function Alerta(props) {
  return (
    <Alert key={props.tipo} variant={props.tipo}>
      {props.mensaje}
    </Alert>
  );
}
