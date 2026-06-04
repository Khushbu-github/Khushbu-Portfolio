import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "react-bootstrap";

function ProjectLandscape(props) {
  const isReversed = props.index % 2 !== 0;
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={elementRef}
      className={`project-landscape-card ${isReversed ? "reversed" : ""} ${isRevealed ? "revealed" : ""}`}
    >
      <Row className="align-items-center">
        <Col lg={5} className="project-img-wrapper">
          <div className="project-img-container">
            <img src={props.imgPath} alt={props.title} className="img-fluid project-img" />
            <div className="img-overlay"></div>
          </div>
        </Col>
        <Col lg={7} className="project-content-wrapper">
          <div className="project-metadata">
            <span className="project-num">{props.customNumber || (props.index + 1 < 10 ? `0${props.index + 1}` : props.index + 1)}</span>
            <span className="project-divider"></span>
            <span className="project-category">{props.category || "PROJECT"}</span>
            <span className="project-dot">•</span>
            <span className="project-year">{props.year || "2024"}</span>
          </div>
          <h2 className="project-title">{props.title}</h2>
          <p className="project-subtitle">{props.subtitle}</p>
          <p className="project-description">{props.description}</p>
          <div className="project-tags">
            {props.tags && props.tags.map((tag, i) => (
              <span key={i} className="project-tag">{tag}</span>
            ))}
          </div>
          <div className="project-links">
            <a href={props.ghLink} target="_blank" rel="noreferrer" className="project-link-btn">
              VIEW ON GITHUB <span className="arrow">↗</span>
            </a>
            {props.demoLink && (
              <a href={props.demoLink} target="_blank" rel="noreferrer" className="project-link-btn demo">
                LIVE DEMO <span className="arrow">↗</span>
              </a>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProjectLandscape;
