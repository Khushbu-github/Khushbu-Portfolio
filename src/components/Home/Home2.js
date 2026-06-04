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
              I'm an <b className="purple">AI Engineer & Full-Stack Developer</b> dedicated to bridging the gap between 
              cutting-edge Machine Learning and robust software engineering. I specialize in building 
              intelligent, data-driven systems that solve complex real-world challenges.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, TypeScript, JavaScript, and C++{" "}
                </b>
              </i>
              — focusing on developing scalable backend architectures and high-performance AI solutions.
              <br />
              <br />
              My core expertise lies in
              <i>
                <b className="purple">
                  {" "}
                  Generative AI, Large Language Models (LLMs), and RAG systems,{" "}
                </b>
              </i>
              alongside building full-stack applications with <b className="purple">Node.js, React.js, and Next.js</b>.
              <br />
              <br />
              I am passionate about <b className="purple">MLOps, Fine-tuning, and Computer Vision</b>, 
              ensuring that AI models are not only accurate but also production-ready.
              <br />
              <br />
              With <b className="purple">10+ Hackathon wins</b> 🏆 at national and college
              levels, I thrive on rapid prototyping and turning innovative ideas into functional products.
            </p>
          </Col>
          <Col md={4} xs={12} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
