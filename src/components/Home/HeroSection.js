import React from "react";
import Type from "./Type";

function HeroSection() {
  return (
    <section id="home" style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: "#000000", display: "flex", alignItems: "center" }}>
      {/* Content */}
      <div className="hero-content" style={{ zIndex: 2, textAlign: "center" }}>
        <h1 className="hero-name">
          KHUSHBU R HAJARI
        </h1>
        <p className="hero-role">
          <Type />
        </p>
        <div className="hero-cta" style={{ justifyContent: "center" }}>
          <a href="#about" className="hero-btn">
            Explore My Work <span className="hero-btn-arrow">↓</span>
          </a>
          <a href="#resume" className="hero-btn hero-btn-ghost">
            View Resume
          </a>
        </div>
        <div className="hero-scroll-indicator" style={{ alignItems: "center" }}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="m_scroll_arrows first"></span>
            <span className="m_scroll_arrows second"></span>
            <span className="m_scroll_arrows third"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
