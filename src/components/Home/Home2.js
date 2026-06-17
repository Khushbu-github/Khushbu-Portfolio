import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Me.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row>
          <Col md={8} xs={12} className="home-about-description">
            <h1 className="home-about-title">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an <b className="purple">AI Engineer & Full-Stack Developer</b> at the intersection of 
              machine intelligence and creative engineering. My mission is to build software that doesn't just work, but <b className="purple">thinks and engages</b>.
              <br />
              <br />
              My technical arsenal is led by 
              <i>
                <b className="purple">
                  {" "}
                  Python, FastAPI, TypeScript, and C++{" "}
                </b>
              </i>
              — ensuring that every backend I build is as scalable as it is intelligent.
              <br />
              <br />
              I specialize in crafting high-impact AI solutions using
              <i>
                <b className="purple">
                  {" "}
                  Generative AI, Large Language Models (LLMs), and RAG Architecture.{" "}
                </b>
              </i>
              I don't just build models; I build production-grade systems that solve real problems.
              <br />
              <br />
              On the frontend, I use <b className="purple">GSAP, Three.js (R3F), and React</b> to create 
              immersive, performance-optimized digital experiences that push the boundaries of the web.
              <br />
              <br />
              With over <b className="purple">10+ Hackathon victories</b> 🏆, I am a builder who 
              thrives on rapid prototyping and turning complex logic into seamless user experiences.
            </p>
          </Col>
          <Col md={4} xs={12} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ borderRadius: "20px", boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)" }} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
