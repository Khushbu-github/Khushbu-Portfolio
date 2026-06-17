import React, { useEffect, useRef, useState } from "react";

function ExperienceTimeline(props) {
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
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={elementRef}
      className={`resume-item ${props.index % 2 === 0 ? "left" : "right"} ${isRevealed ? "revealed" : ""}`}
    >
      <h3 className="resume-title">{props.title}</h3>
      <div className="resume-content">
        {props.role && (
          <em className="purple" style={{ fontWeight: "700", fontSize: "1.1em", display: "block", marginBottom: "5px" }}>
            {props.role}
          </em>
        )}
        <span className="resume-duration">{props.duration}</span>
        <div className="resume-description">
          {props.description}
        </div>
      </div>
    </div>
  );
}

export default ExperienceTimeline;
