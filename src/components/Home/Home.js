import React from "react";
import Home2 from "./Home2";
import HeroSection from "./HeroSection";
import SocialLinks from "../SocialLinks";

function Home() {
  return (
    <section>
      {/* New Hero Section */}
      <HeroSection />

      {/* About / Intro */}
      <Home2 />

      {/* Contact / Find Me On Section */}
      <SocialLinks showResume={true} />
    </section>
  );
}

export default Home;
