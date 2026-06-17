import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceAccordion from "./ExperienceAccordion";
import Card from "react-bootstrap/Card";
import ExtraCurricular from "./ExtraCurricular";
import SkillOrb from "./SkillOrb";

function About() {

  return (
    <>
      <Particle />
      <Container fluid className="about-section" id="about">
        <Container>

          {/* Experience Section */}
          <ExperienceAccordion />

          {/* Interactive Skills Globe Section */}
          <section style={{ paddingBottom: "30px" }}>
            <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "40px" }}>
              Professional <strong className="purple">Skills Globe</strong>
            </h1>
            <SkillOrb />
          </section>

          {/* Education Section */}
          <Card className="card">
            <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "40px" }}>
              My <strong className="purple">Education </strong>
            </h1>
            <Row className="resume" style={{ justifyContent: "center", paddingTop: "0px" }}>
              <Col md={12}>
                <ExperienceTimeline
                  index={0}
                  title="Dayananda Sagar College of Engineering, Bengaluru"
                  role="B.E. in Artificial Intelligence and Machine Learning"
                  duration="2023 – 2027"
                  description={
                    <>
                      Currently pursuing Bachelor of Engineering with a focus on AI and ML.
                      <br />
                      Maintaining a strong academic record with a CGPA of <strong className="purple">9.27</strong>.
                    </>
                  }
                />
                <ExperienceTimeline
                  index={1}
                  title="JS Pre-University College, Bengaluru"
                  role="Pre-University Education (PCMB)"
                  duration="2021 – 2023"
                  description={
                    <>
                      Completed PU education with an outstanding score of <strong className="purple">96%</strong>.
                    </>
                  }
                />
                <ExperienceTimeline
                  index={2}
                  title="Pine Woods English School, Bengaluru"
                  role="Secondary Education (SSLC)"
                  duration="2015 – 2021"
                  description={
                    <>
                      Completed secondary education with a distinction score of <strong className="purple">97%</strong>.
                    </>
                  }
                />
              </Col>
            </Row>
          </Card>

          {/* Extracurricular Section */}
          <ExtraCurricular />

        </Container>
      </Container>
    </>
  );
}

export default About;
