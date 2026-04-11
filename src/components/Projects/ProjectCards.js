import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <div className="mt-auto pt-4 d-flex justify-content-center" style={{ gap: "15px" }}>
          <Button variant="primary" href={props.ghLink} target="_blank" className="d-flex align-items-center justify-content-center text-nowrap" style={{ flex: 1, padding: "10px 15px" }}>
            <BsGithub style={{ marginRight: "8px" }} />
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="d-flex align-items-center justify-content-center text-nowrap"
              style={{ flex: 1, padding: "10px 15px" }}
            >
              <CgWebsite style={{ fontSize: "1.2rem", marginRight: "8px" }} />
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
