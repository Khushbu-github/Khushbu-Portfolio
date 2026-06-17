import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Freelance AI Engineer & Full Stack Developer",
    company: "DigitalOrbit",
    duration: "2025 – Present",
    location: "Remote",
    link: null,
    description:
      "Built and delivered 9+ production-ready web applications for a digital marketing company. Developed scalable full-stack systems using React, Tailwind CSS, Node.js, and MongoDB while optimizing for SEO, Core Web Vitals, and performance.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "FastAPI Cloud", "GSAP", "Three.js", "React Three Fiber", "WebGL", "SEO"],
  },
  {
    role: "Software Developer Intern",
    company: "MyStartupWave",
    duration: "Nov 2025 – Dec 2025",
    location: "Remote",
    link: null,
    description:
      "Built reusable UI components in React and Tailwind CSS. Integrated frontend modules with backend REST APIs in an agile startup environment, contributing to sprint deliverables and code reviews.",
    tags: ["React", "Tailwind CSS", "FastAPI", "GSAP", "Three.js", "React Three Fiber", "WebGL", "REST API", "Agile"],
  },
];

function ExperienceAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Container className="exp-accordion-wrapper">
      <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "50px" }}>
        Professional <strong className="purple">Experience</strong>
      </h1>

      {experiences.map((exp, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`exp-accordion-item ${isOpen ? "open" : ""}`}>
            {/* Header row */}
            <button
              className="exp-accordion-header"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
            >
              <span className="exp-header-left">
                <span className="exp-role">{exp.role}</span>
                <span className="exp-company purple">&nbsp;@ {exp.company}</span>
              </span>
              <span className="exp-header-right">
                <span className="exp-duration">{exp.duration}</span>
                <span className="exp-toggle-icon">
                  {isOpen ? (
                    <MdRemoveCircleOutline size={22} />
                  ) : (
                    <MdAddCircleOutline size={22} />
                  )}
                </span>
              </span>
            </button>

            {/* Expandable detail panel */}
            <div className={`exp-accordion-body ${isOpen ? "expanded" : ""}`}>
              <div className="exp-body-inner">
                <div className="exp-meta">
                  <span className="exp-meta-item">
                    <FaMapMarkerAlt size={12} />
                    &nbsp;{exp.location}
                  </span>
                  {exp.link && (
                    <span className="exp-meta-item">
                      <FaExternalLinkAlt size={11} />
                      &nbsp;
                      <a href={exp.link} target="_blank" rel="noreferrer" className="exp-link">
                        {exp.link.replace("https://", "")}
                      </a>
                    </span>
                  )}
                </div>
                <p className="exp-description">{exp.description}</p>
                <div className="exp-tags">
                  {exp.tags.map((tag, ti) => (
                    <span key={ti} className="exp-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default ExperienceAccordion;
