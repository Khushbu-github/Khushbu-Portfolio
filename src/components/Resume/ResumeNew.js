import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/Khushbu_Hajari_Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import SocialLinks from "../SocialLinks";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" id="resume">
        <Particle />

        {/* PDF Preview Section */}
        <Row className="resume" style={{ justifyContent: "center", position: "relative" }}>
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* Find Me On Section */}
        <SocialLinks showResume={true} />
      </Container>
    </div>
  );
}

export default ResumeNew;
