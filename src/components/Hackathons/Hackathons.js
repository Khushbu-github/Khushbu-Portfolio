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
    <Container fluid className="project-section" id="hackathons">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Hackathon </strong> Achievements
        </h1>
        <p>
          Here are some of the hackathons I've participated in and won.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col lg={6} md={12} className="hackathon-col-card">
            <HackathonCard
              imgPath={srujana}
              badge="1ST PLACE"
              title="Srujana 2025"
              subtitle="Chanakya University, Bengaluru"
              year="2025"
              description="Achieved 1st place in a 72-hour Hackathon. Awarded by Dr. S. Somanath, Chairman of ISRO, for an innovative AI solution."
            />
          </Col>

          <Col lg={6} md={12} className="hackathon-col-card">
            <HackathonCard
              imgPath={devduel}
              badge="RUNNER-UP"
              title="Dev Duel 1.0"
              subtitle="IIT Hyderabad"
              year="2025"
              description="Secured 2nd Prize at the prestigious IIT Hyderabad Dev Duel. Built a robust application focused on scalability and UX."
            />
          </Col>

          <Col lg={6} md={12} className="hackathon-col-card">
            <HackathonCard
              imgPath={aiverse}
              badge="1ST PLACE"
              title="AI Verse"
              subtitle="Amrita Vishwa Vidyapeetham, Coimbatore"
              year="2025"
              description="Winner of the AI Verse Hackathon. Developed an AI-driven project solving complex real-world data challenges."
            />
          </Col>

          <Col lg={6} md={12} className="hackathon-col-card">
            <HackathonCard
              imgPath={hacktocrack}
              badge="WINNER"
              title="HackToCrack"
              subtitle="VIMEET Navi Mumbai"
              year="2024"
              description="Victory in the 36-hour National-Level Hackathon. Outshone 100+ teams with a polished, functional AI prototype."
            />
          </Col>

          <Col lg={6} md={12} className="hackathon-col-card">
            <HackathonCard
              imgPath={udaya}
              badge="RUNNER-UP"
              title="Udhaya 1.0"
              subtitle="DSCE, Bengaluru"
              year="2023"
              description="Named Runner-up in a 12-hour sprint. Prototyped a rapid-deployment solution among 100+ competing teams."
            />
          </Col>
          <Col lg={6} md={12} className="hackathon-col-card">
            <HackathonCard
              badge="FINALIST"
              title="15+ Other Achievements"
              subtitle="Regional & National Events"
              year="2023-2025"
              description="Consistently reached the finals in over 5 national events, demonstrating a track record of innovation under pressure."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Hackathons;
