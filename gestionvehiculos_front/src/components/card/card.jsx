import Card from "react-bootstrap/Card";

import "./card.css";

export default function Cards(props) {
  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>{props.title} </Card.Title>
        {props.data}
      </Card.Body>
    </Card>
  );
}
