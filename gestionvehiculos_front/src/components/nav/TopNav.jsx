import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import "./nav.css";

export default function TopNav() {
  // Obtengo el nombre de la ruta
  const location = useLocation();

  // Variable para cambiar el color
  let style = "";

  const fetchEstilos = () => {
    switch (location.pathname) {
      case "/home":
        style = "Red";
        break;
      case "/agregar":
        style = "Red";
        break;
    }
  };

  useEffect(() => {
    fetchEstilos();
  }, [location]);

  return (
    <>
      <div className="containerNav">
        <Nav>
          <Nav.Item>
            <Nav.Link style={{ color: style }} href="/home">
              Inicio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              style={{ color: style }}
              href="/agregar"
            >
              Añadir Vehículo Nuevo
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}
