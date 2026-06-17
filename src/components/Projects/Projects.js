import React from "react";
import { Container } from "react-bootstrap";
import ProjectLandscape from "./ProjectLandscape";
import Particle from "../Particle";
import intellicredit from "../../Assets/Projects/intellicredit.png";
import interxai from "../../Assets/Projects/interxai.png";
import incluverse from "../../Assets/Projects/incluverse.png";
import smartcity from "../../Assets/Projects/smartcity.png";

function Projects() {
  const projectsData = [
    {
      title: "IntelliCredit",
      subtitle: "AI-Driven Credit Appraisal Engine",
      description: "Corporate credit appraisal engine with PDF OCR, GST anomaly detection, and MCA research agent. Built a 5Cs scoring pipeline with AI-driven decisions and automated CAM report generation.",
      imgPath: intellicredit,
      ghLink: "https://github.com/Khushbu-github/Intellicredit",
      demoLink: "https://intellicredit-lilac.vercel.app",
      tags: ["PYTHON", "FASTAPI", "OCR", "PANDAS"],
      category: "FINTECH AI",
      year: "2025"
    },
    {
      title: "Smart Incident Analyzer",
      subtitle: "Predictive Analytics for Bengaluru City",
      description: "AI-powered platform integrating traffic, accident, and weather data for risk prediction. Features a RAG pipeline and interactive map-based dashboard for real-time urban insights.",
      imgPath: smartcity,
      ghLink: "https://github.com/Khushbu-github/Bengaluru-Smart-City-Incident-Analyzer",
      tags: ["XGBOOST", "LANGCHAIN", "DATA SCIENCE", "INTERACTIVE MAPS"],
      category: "DATA SCIENCE",
      year: "2024",
      customNumber: "05"
    },
    {
      title: "InterXAI",
      subtitle: "AI-Assisted Career Platform",
      description: "AI-powered interview automation system with Groq LLM for question generation and FaceApi.js for live presence monitoring. Implemented an end-to-end pipeline from ATS screening to interview conduction.",
      imgPath: interxai,
      ghLink: "https://github.com/Khushbu-github/InterXAI",
      tags: ["GROQ", "FACIAL RECOGNITION", "REACT", "STABLE DIFFUSION"],
      category: "HR TECH",
      year: "2025"
    },
    {
      title: "IncluVerse",
      subtitle: "Accessibility-First Digital Platform",
      description: "Accessibility-focused digital platform with voice commands, OCR, and community engagement features. Built to empower differently-abled users with intelligent assistive technologies.",
      imgPath: incluverse,
      ghLink: "https://github.com/Khushbu-github/IncluVerse-AIOP-For-Diabled",
      demoLink: "https://inclu-verse-aiop-for-diabled.vercel.app",
      tags: ["TESSERACT.JS", "LANGCHAIN", "VOICE AI", "ACCESSIBILITY"],
      category: "SOCIAL IMPACT",
      year: "2024"
    }
  ];

  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ marginBottom: "50px" }}>
          A showcase of my recent engineering and AI research works.
        </p>
        
        {projectsData.map((project, index) => (
          <ProjectLandscape key={index} index={index} {...project} />
        ))}
      </Container>
    </Container>
  );
}

export default Projects;
