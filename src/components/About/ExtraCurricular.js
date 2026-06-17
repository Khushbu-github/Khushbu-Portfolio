import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaChalkboardTeacher, FaHandsHelping } from "react-icons/fa";
import { GiGavel } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";

function ExtraCurricular() {
  const cards = [
    {
      icon: <FaChalkboardTeacher />,
      title: "AI Engineer & Full Stack Developer Trainer",
      org: "Jain Group of Institutions",
      year: "2025",
      desc: "Mentored and trained 200+ students in full stack web development over a 5-day program."
    },
    {
      icon: <GiGavel />,
      title: "Judge - Ideathon 2025",
      org: "Ideahive",
      year: "2025",
      desc: "Evaluated innovative project ideas based on feasibility, technical implementation, and impact."
    },
    {
      icon: <HiUsers />,
      title: "Team Lead",
      org: "CodeZero Technical Club",
      year: "2024 – Present",
      desc: "Leading technical events and mentoring students in frontend and backend system design."
    },
    {
      icon: <FaHandsHelping />,
      title: "Tech Team & Volunteer",
      org: "Aventus Hackathon",
      year: "2023 – 2025",
      desc: "Assisted with event setup, technical support, and participant coordination."
    }
  ];

  return (
    <div className="extra-section">
      <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "50px" }}>
        Extracurricular Experience & <strong className="purple">Leadership</strong>
      </h1>
      <Row style={{ justifyContent: "center" }}>
        {cards.map((card, i) => (
          <Col md={6} lg={3} sm={12} key={i} className="extra-card-col">
            <div className="extra-card">
              <div className="extra-card-icon-wrapper">
                <span className="extra-card-icon">{card.icon}</span>
              </div>
              <div className="extra-card-content">
                <h4 className="extra-card-title">{card.title}</h4>
                <div className="extra-card-meta">
                  <span className="purple">{card.org}</span>
                  <span className="extra-card-year"> | {card.year}</span>
                </div>
                <p className="extra-card-desc">{card.desc}</p>
              </div>
              <div className="extra-card-glow" />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ExtraCurricular;
