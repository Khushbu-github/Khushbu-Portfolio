import React from "react";
import Card from "react-bootstrap/Card";

function HackathonCard(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && (
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          className="hackathon-img"
        />
      )}
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default HackathonCard;
