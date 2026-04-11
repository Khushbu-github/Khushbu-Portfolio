import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title className="purple" style={{ fontWeight: "700", fontSize: "1.4em" }}>
          {props.title}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-white" style={{ fontSize: "1.1em", fontWeight: "600" }}>
          {props.role}
        </Card.Subtitle>
        <Card.Subtitle className="mb-3" style={{ fontSize: "0.9em", color: "#adb5bd" }}>
          {props.duration}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "center", fontSize: "1em" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
