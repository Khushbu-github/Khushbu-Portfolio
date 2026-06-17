import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Khushbu R Hajari</span>{" "}
            from <span className="purple">Bengaluru, India</span>.
            <br />
            I'm currently working as a{" "}
            <span className="purple">Freelance AI Engineer & Full Stack Developer</span> at{" "}
            <span className="purple">DigitalOrbit</span>.
            <br />I am pursuing a{" "}
            <span className="purple">B.E. in AI &amp; Machine Learning</span>{" "}
            at{" "}
            <span className="purple">
              Dayananda Sagar College of Engineering, Bengaluru
            </span>
            .
            <br />
            <br />
            Apart from coding, some other activities that I love:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Dance — Bharatanatyam, Western &amp; Semi-classical 
            </li>
            <li className="about-activity">
              <ImPointRight /> Competing in Hackathons 
            </li>
            <li className="about-activity">
              <ImPointRight /> Art & Aesthetics
            </li>
            <li className="about-activity">
              <ImPointRight /> District-Level Throwball Player 
            </li>
         
          </ul>

          <p style={{ color: "#be50f4", fontWeight: "600", fontStyle: "italic" }}>
            "Code is not just logic — it's a bridge between ideas and impact!"{" "}
          </p>
          {/* <footer className="blockquote-footer">Khushbu</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
