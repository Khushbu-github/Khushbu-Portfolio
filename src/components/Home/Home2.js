import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Me.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">Full-Stack Developer</b> passionate
              about building scalable, end-to-end applications and data-driven
              systems. I love solving real-world problems through clean
              engineering and intelligent solutions.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  TypeScript, JavaScript, Python, and C++{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks,
              as well as building ML-powered applications.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Machine Learning, Data Analysis, Backend Systems,{" "}
                </b>
              </i>
              and designing robust REST APIs and Microservices architectures.
              <br />
              <br />
              I love building with{" "}
              <b className="purple">Node.js, React.js</b> and{" "}
              <b className="purple">Next.js</b>, and I'm an active
              hackathon participant with{" "}
              <b className="purple">10+ wins</b> at national and college
              levels 🏆
            </p>
          </Col>
          <Col md={4} className="myAvtar">
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
