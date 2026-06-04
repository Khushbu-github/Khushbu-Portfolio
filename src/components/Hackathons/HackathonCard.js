import React, { useEffect, useRef, useState } from "react";

function HackathonCard(props) {
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
      className={`hackathon-card-new ${isRevealed ? "revealed" : ""}`}
    >
      <div className="hackathon-img-wrapper">
        {props.badge && <div className="hackathon-badge">{props.badge}</div>}
        <img src={props.imgPath} alt="hackathon" className="hackathon-bg-img" />
        <div className="hackathon-card-overlay">
          <div className="hackathon-metadata">
             <span className="hackathon-venue">{props.subtitle}</span>
             <span className="hackathon-year">{props.year}</span>
          </div>
          <h2 className="hackathon-title">{props.title}</h2>
          <p className="hackathon-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
export default HackathonCard;
