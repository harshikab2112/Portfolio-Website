import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg"; // replace with your own image if you have one
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export const Banner = () => {
  const roles = useMemo(
    () => ["Aspiring Software Engineer", "Frontend Developer", "Tech Enthusiast"],
    []
  );
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseBetweenRoles = 2000;

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) => currentRole.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), pauseBetweenRoles);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Harshika Bansal`}{" "}
                <span className="txt-rotate">
                  <span className="wrap">{displayText}</span>
                </span>
              </h1>
              <p>
                I'm currently learning Python, SQL, MySQL, HTML, CSS, JavaScript,
                and exploring React. Passionate about improving my skills every
                day and working towards becoming a full-stack developer.
              </p>
              <button onClick={() => window.location.href = "#contact"}>
                Let's Connect <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="animate__animated animate__zoomIn">
              <img src={headerImg} alt="Header" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
