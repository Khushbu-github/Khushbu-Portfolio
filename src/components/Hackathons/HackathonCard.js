import React from "react";

function HackathonCard(props) {
  return (
    <div className="hackathon-card-new">
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
