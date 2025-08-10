import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";
import navIcon4 from "../assets/img/nav-icon4.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col xs={12} className="text-center">
            <div className="social-icon" style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
              <a href="https://www.linkedin.com/in/harshika-bansal/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn Profile" />
              </a>
              <a href="https://leetcode.com/u/harshikab2112/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Leetcode Profile" />
              </a>
              <a href="https://www.hackerrank.com/profile/harshikab2112" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Hackerrank Profile" />
              </a>
              <a href="https://github.com/harshikab2112" target="_blank" rel="noopener noreferrer">
                <img src={navIcon4} alt="Github Profile" />
              </a>
            </div>
            <p className="mt-3">Copyright © {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
