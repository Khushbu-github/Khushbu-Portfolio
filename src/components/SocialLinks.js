import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

function SocialLinks({ showResume = true }) {
  return (
    <Row style={{ paddingTop: "30px", paddingBottom: "50px" }}>
      <Col md={12} className="home-about-social">
        <h1 className="contact-heading">Find Me On</h1>
        <p className="contact-desc">
          Feel free to <span className="purple">connect </span>with me
        </p>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/Khushbu-github"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              title="GitHub"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://linkedin.com/in/khushbu-r-hajari"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="mailto:khushbuhajari530@gmail.com"
              className="icon-colour home-social-icons"
              title="Email"
            >
              <AiOutlineMail />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="tel:+919663553530"
              className="icon-colour home-social-icons"
              title="Contact Number"
            >
              <AiFillPhone />
            </a>
          </li>
          {showResume && (
            <li className="social-icons">
              <a
                href="#resume"
                className="icon-colour home-social-icons"
                title="View Resume"
              >
                <CgFileDocument />
              </a>
            </li>
          )}
        </ul>
      </Col>
    </Row>
  );
}

export default SocialLinks;
