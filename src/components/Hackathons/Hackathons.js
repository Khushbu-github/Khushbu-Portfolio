import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HackathonCard from "./HackathonCard";
import Particle from "../Particle";
import srujana from "../../Assets/Hackathons/SRUJANA.jpeg";
import devduel from "../../Assets/Hackathons/DEVDUEL.jpeg";
import aiverse from "../../Assets/Hackathons/AIVERSE.jpg";
import hacktocrack from "../../Assets/Hackathons/HACTTOCRACK.jpeg";
import udaya from "../../Assets/Hackathons/UDAYA.jpeg";

function Hackathons() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Hackathon </strong> Achievements
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the hackathons I've participated in and won.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <HackathonCard
              imgPath={srujana}
              title="Winner – Srujana 2025-Y"
              description="Achieved 1st place in a high-stakes 72-hour Hackathon hosted by Chanakya University. Developed an innovative solution that stood out among numerous entries, receiving the award from Dr. S. Somanath, Former Chairman of ISRO."
            />
          </Col>

          <Col md={4} className="project-card">
            <HackathonCard
              imgPath={devduel}
              title="Runner-up – Dev Duel Hackathon"
              description="Secured 2nd Prize at the prestigious IIT Hyderabad Dev Duel. Our team designed a robust application focusing on scalability and user experience, competing with top talent from various institutes."
            />
          </Col>

          <Col md={4} className="project-card">
            <HackathonCard
              imgPath={aiverse}
              title="Winner – AI Verse Hackathon"
              description="Winner of the AI Verse Hackathon at Amrita Vishwa Vidyapeetham, Coimbatore. Built an AI-driven project that leveraged cutting-edge machine learning techniques to solve complex real-world data challenges."
            />
          </Col>

          <Col md={4} className="project-card">
            <HackathonCard
              imgPath={hacktocrack}
              title="Winner – HacktoCrack"
              description="Led my team to victory in the 36-hour National-Level Hack-To-Crack at VIMEET Navi Mumbai. Outshone 100+ teams by delivering a polished, functional prototype under Intense time constraints."
            />
          </Col>

          <Col md={4} className="project-card">
            <HackathonCard
              imgPath={udaya}
              title="Runner-up – Udhaya"
              description="Named Runner-up in the Udhaya 12-hour sprint hackathon. Our team successfully prototyped a solution for rapid deployment, ranking among the top participants out of over 100 competing teams."
            />
          </Col>
          <Col md={4} className="project-card">
            <HackathonCard
              title="5+ Other Finalist Achievements"
              description="Beyond these wins, I have consistently been a finalist in 5+ other regional and national hackathons, demonstrating a track record of innovation and persistent problem-solving under pressure."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Hackathons;
