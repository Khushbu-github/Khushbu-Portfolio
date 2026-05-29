import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import intellicredit from "../../Assets/Projects/intellicredit.png";
import interxai from "../../Assets/Projects/interxai.png";
import healthdash from "../../Assets/Projects/healthdash.png";
import incluverse from "../../Assets/Projects/incluverse.png";
import smartcity from "../../Assets/Projects/smartcity.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={intellicredit}
              isBlog={false}
              title="IntelliCredit"
              description="Corporate credit appraisal engine with PDF OCR, GST anomaly detection, and MCA research agent. Built a 5Cs scoring pipeline with AI-driven approve/reject decisions and automated CAM report generation."
              ghLink="https://github.com/Khushbu-github/Intellicredit"
              demoLink="https://intellicredit-lilac.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interxai}
              isBlog={false}
              title="InterXAI"
              description="AI-powered interview automation system with Groq LLM for question generation and FaceApi.js for live presence monitoring. Implemented an end-to-end pipeline from ATS screening to interview conduction."
              ghLink="https://github.com/Khushbu-github/InterXAI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthdash}
              isBlog={false}
              title="Health Dash"
              description="Hybrid Electronic Health Record (EHR) system with secure digital record management. Implemented decentralized storage using Pinata and ML-based accident detection with role-based dashboards."
              ghLink="https://github.com/Khushbu-github/ArogyaKhosh"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={incluverse}
              isBlog={false}
              title="IncluVerse"
              description="Accessibility-focused digital platform with voice commands, OCR (Tesseract.js), multilingual translation (LangChain), and community engagement features for differently-abled users."
              ghLink="https://github.com/Khushbu-github/IncluVerse-AIOP-For-Diabled"
              demoLink="https://inclu-verse-aiop-for-diabled.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartcity}
              isBlog={false}
              title="Bengaluru Smart City Incident Analyzer"
              description="AI-powered platform integrating traffic, accident, complaint, and weather data for risk prediction and hotspot detection using Random Forest and XGBoost. Features a RAG pipeline with LangChain and an interactive map-based dashboard for real-time insights."
              ghLink="https://github.com/Khushbu-github/Bengaluru-Smart-City-Incident-Analyzer"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
