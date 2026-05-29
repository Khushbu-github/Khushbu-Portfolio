import React from "react";

function ExperienceTimeline(props) {
  return (
    <div className="resume-item">
      <h3 className="resume-title" style={{ fontSize: "1.2em", marginBottom: "5px" }}>{props.title}</h3>
      {props.role && (
        <p>
          <em className="purple" style={{ fontWeight: "600", fontSize: "1.1em" }}>{props.role}</em>
          <br />
          <span style={{ fontSize: "0.9em", color: "#adb5bd" }}>{props.duration}</span>
        </p>
      )}
      {!props.role && (
        <p style={{ marginTop: "-5px", marginBottom: "15px" }}>
          <span style={{ fontSize: "0.9em", color: "#adb5bd" }}>{props.duration}</span>
        </p>
      )}
      <div style={{ textAlign: "justify", fontSize: "1em", color: "white" }}>
        {props.description}
      </div>
    </div>
  );
}

export default ExperienceTimeline;
