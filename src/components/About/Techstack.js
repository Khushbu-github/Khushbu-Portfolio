import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiExpress, SiFastapi, SiPytorch, SiChainlink, SiOpencv } from "react-icons/si";
import { GiBrain, GiArtificialIntelligence, GiProcessor } from "react-icons/gi";
import { TbVectorTriangle, TbMathFunction, TbMathIntegral } from "react-icons/tb";
import { MdAutoGraph, MdOutlineModelTraining, MdTune } from "react-icons/md";
import { FaDatabase, FaChartBar, FaDice } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";

function Techstack() {
  return (
    <>
      {/* Development Skills */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={C} alt="C++" />
          <div className="tech-icons-text">C++</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Javascript} alt="javascript" />
          <div className="tech-icons-text">Javascript</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Typescript} alt="typescript" />
          <div className="tech-icons-text">Typescript</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Python} alt="python" />
          <div className="tech-icons-text">Python</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Node} alt="node" />
          <div className="tech-icons-text">Node.Js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={ReactIcon} alt="react" />
          <div className="tech-icons-text">React.Js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs fontSize={"24px"} />
          <div className="tech-icons-text">Next.js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress fontSize={"24px"} />
          <div className="tech-icons-text">Express.js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFastapi fontSize={"24px"} />
          <div className="tech-icons-text">FastAPI</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Tailwind} alt="tailwind" />
          <div className="tech-icons-text">Tailwind CSS</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Mongo} alt="mongoDb" />
          <div className="tech-icons-text">MongoDB</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={SQL} alt="SQL" />
          <div className="tech-icons-text">PostgreSQL</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Firebase} alt="firebase" />
          <div className="tech-icons-text">Firebase</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Redis} alt="redis" />
          <div className="tech-icons-text">Redis</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Docker} alt="docker" />
          <div className="tech-icons-text">Docker</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={AWS} alt="AWS" className="tech-icon-images" />
          <div className="tech-icons-text">AWS</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Git} alt="git" />
          <div className="tech-icons-text">Git</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Postman} alt="Postman" />
          <div className="tech-icons-text">Postman</div>
        </Col>
      </Row>

      {/* AI / ML Skills */}
      <h1 className="project-heading" style={{ paddingTop: "40px", paddingBottom: "20px" }}>
        AI / ML <strong className="purple">Skills</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPytorch fontSize={"24px"} />
          <div className="tech-icons-text">PyTorch</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <GiBrain fontSize={"24px"} />
          <div className="tech-icons-text">LLMs</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <MdTune fontSize={"24px"} />
          <div className="tech-icons-text">Fine-tuning</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <MdOutlineModelTraining fontSize={"24px"} />
          <div className="tech-icons-text">MLOps</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiChainlink fontSize={"24px"} />
          <div className="tech-icons-text">LangChain</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaDatabase fontSize={"24px"} />
          <div className="tech-icons-text">RAG</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <TbVectorTriangle fontSize={"24px"} />
          <div className="tech-icons-text">Vector DBs</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiOpencv fontSize={"24px"} />
          <div className="tech-icons-text">Computer Vision</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <GiProcessor fontSize={"24px"} />
          <div className="tech-icons-text">Diffusion Models</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <GiArtificialIntelligence fontSize={"24px"} />
          <div className="tech-icons-text">Multimodal AI</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <MdAutoGraph fontSize={"24px"} />
          <div className="tech-icons-text">Generative AI</div>
        </Col>
      </Row>

      {/* Mathematical Foundations */}
      <h1 className="project-heading" style={{ paddingTop: "40px", paddingBottom: "20px" }}>
        Mathematical <strong className="purple">Foundations</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <TbVectorTriangle fontSize={"24px"} />
          <div className="tech-icons-text">Advanced Linear Algebra</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <TbMathIntegral fontSize={"24px"} />
          <div className="tech-icons-text">Calculus</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <TbMathFunction fontSize={"24px"} />
          <div className="tech-icons-text">Differentiation</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaDice fontSize={"24px"} />
          <div className="tech-icons-text">Probability</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaChartBar fontSize={"24px"} />
          <div className="tech-icons-text">Statistics</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <BsGraphUp fontSize={"24px"} />
          <div className="tech-icons-text">Optimization</div>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
