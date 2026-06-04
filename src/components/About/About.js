import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ExperienceTimeline from "./ExperienceTimeline";
import { FaChalkboardTeacher, FaHandsHelping } from "react-icons/fa";
import { GiGavel } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import Card from "react-bootstrap/Card";

function About() {
  const sectionCardStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    border: "1px solid rgba(200, 137, 230, 0.15)",
    borderRadius: "15px",
    padding: "30px",
    marginBottom: "40px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"
  };

  return (
    <>
      <Particle />
      <Container fluid className="about-section" id="about">
        <Container>
          {/* Introduction Section */}
          <section>
            <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "40px" }}>
              <Col md={7} xs={12} className="about-description">
                <h1 className="about-title">
                  Know Who <strong className="purple">I'M</strong>
                </h1>
                <AboutCard />
              </Col>
              <Col md={5} xs={12} className="about-img-container">
                <img src={laptopImg} alt="about" className="img-fluid" />
              </Col>
            </Row>
          </section>

          {/* Experience Section */}
          <Card style={sectionCardStyle}>
            <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "40px" }}>
              Professional <strong className="purple">Experience </strong>
            </h1>
            <Row className="resume" style={{ justifyContent: "center", paddingTop: "0px" }}>
              <Col md={10}>
                <ExperienceTimeline
                  title="DigitalOrbit"
                  role="Freelance AI Engineer & Full Stack Developer"
                  duration="2025 – Present"
                  description={
                    <>
                      Built and delivered <strong className="purple">9+ production-ready</strong> web applications for a digital marketing company.
                      <br />
                      Developed scalable full-stack systems using React, Tailwind CSS, Node.js, and MongoDB while optimizing for SEO and performance.
                    </>
                  }
                />
                <ExperienceTimeline
                  title="MyStartupWave"
                  role="Software Developer Intern"
                  duration="Nov 2025 – Dec 2025"
                  description={
                    <>
                      Built reusable UI components using React and Tailwind CSS.
                      <br />
                      Integrated frontend modules with backend APIs in an <strong className="purple">agile startup environment</strong>.
                    </>
                  }
                />
              </Col>
            </Row>
          </Card>

          {/* Education Section */}
          <Card style={sectionCardStyle}>
            <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "40px" }}>
              My <strong className="purple">Education </strong>
            </h1>
            <Row className="resume" style={{ justifyContent: "center", paddingTop: "0px" }}>
              <Col md={10}>
                <ExperienceTimeline
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
          <Card style={sectionCardStyle}>
            <h1 className="project-heading" style={{ textAlign: "center", paddingBottom: "30px" }}>
              Extracurricular Experience & <strong className="purple">Leadership </strong>
            </h1>
            <Row style={{ justifyContent: "center" }}>
              <Col md={12}>
                <Row style={{ justifyContent: "center" }}>
                  <Col md={6} style={{ marginBottom: "30px", textAlign: "center" }}>
                    <FaChalkboardTeacher size={50} className="purple" style={{ marginBottom: "15px" }} />
                    <h4 style={{ fontWeight: "700", color: "white" }}>AI Engineer & Full Stack Developer Trainer</h4>
                    <p className="purple" style={{ fontWeight: "600", marginBottom: "5px" }}>Jain Group of Institutions | 2025</p>
                    <p style={{ color: "white", opacity: "0.9" }}>Mentored and trained 200+ students in full stack web development over a 5-day program.</p>
                  </Col>
                  <Col md={6} style={{ marginBottom: "30px", textAlign: "center" }}>
                    <GiGavel size={50} className="purple" style={{ marginBottom: "15px" }} />
                    <h4 style={{ fontWeight: "700", color: "white" }}>Judge - Ideathon 2025</h4>
                    <p className="purple" style={{ fontWeight: "600", marginBottom: "5px" }}>Ideahive | 2025</p>
                    <p style={{ color: "white", opacity: "0.9" }}>Evaluated innovative project ideas based on feasibility, technical implementation, and impact.</p>
                  </Col>
                  <Col md={6} style={{ marginBottom: "30px", textAlign: "center" }}>
                    <HiUsers size={50} className="purple" style={{ marginBottom: "15px" }} />
                    <h4 style={{ fontWeight: "700", color: "white" }}>Team Lead</h4>
                    <p className="purple" style={{ fontWeight: "600", marginBottom: "5px" }}>CodeZero Technical Club | 2024 – Present</p>
                    <p style={{ color: "white", opacity: "0.9" }}>Leading technical events and mentoring students in frontend and backend system design.</p>
                  </Col>
                  <Col md={6} style={{ marginBottom: "30px", textAlign: "center" }}>
                    <FaHandsHelping size={50} className="purple" style={{ marginBottom: "15px" }} />
                    <h4 style={{ fontWeight: "700", color: "white" }}>Tech Team & Volunteer</h4>
                    <p className="purple" style={{ fontWeight: "600", marginBottom: "5px" }}>Aventus Hackathon | 2023 – 2025</p>
                    <p style={{ color: "white", opacity: "0.9" }}>Assisted with event setup, technical support, and participant coordination.</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>

          {/* Skillset Section */}
          <Card style={sectionCardStyle}>
            <h1 className="project-heading" style={{ textAlign: "center", paddingBottom: "20px" }}>
              Professional <strong className="purple">Skillset </strong>
            </h1>
            <Techstack />
          </Card>

          {/* Tools Section */}
          <Card style={sectionCardStyle}>
            <h1 className="project-heading" style={{ textAlign: "center", paddingBottom: "20px" }}>
              <strong className="purple">Tools</strong> I use
            </h1>
            <Toolstack />
          </Card>

          {/* GitHub Section */}
          <Card style={sectionCardStyle}>
             <Github />
          </Card>
        </Container>
      </Container>
    </>
  );
}

export default About;
