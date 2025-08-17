import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

  const tabDescriptions = {
    first: "Welcome to my complete projects portfolio! Here you'll find a variety of projects showcasing my skills across multiple domains — from responsive web development to Python-powered applications. Each project reflects my passion for clean design, user experience, and efficient code.",
    second: "This section highlights my Web Development projects. These include interactive websites, landing pages, and dynamic frontends built with modern technologies like React, Bootstrap, and JavaScript. Explore the work that demonstrates my ability to create responsive, accessible, and visually appealing web experiences.",
    third: "Discover my Python projects here — a mix of web applications, console-based tools, and engaging games. These projects showcase my programming logic, problem-solving skills, and familiarity with Python frameworks and libraries. Dive in to see how I apply Python to solve real-world challenges.",
  };


  const projects = [
    {
      title: "E-commerce Site",
      description: "Web Development",
      imgUrl: projImg1,
      category: "web",
      projectUrl: "https://bloomfiesta.netlify.app/"
    },
    {
      title: "Developer Landing Page",
      description: "Web Development",
      imgUrl: projImg2,
      category: "web",
      projectUrl: "https://developer-landing-page-hb.vercel.app/"
    },
    {
      title: "Frontend Mentor",
      description: "Design",
      imgUrl: projImg3,
      category: "web",
      projectUrl: "https://www.frontendmentor.io/profile/harshikab2112"
    },
    {
      title: "Space Parallax Website",
      description: "Web Development",
      imgUrl: projImg4,
      category: "web",
      projectUrl: "https://space-parallax-website-hb.vercel.app/"
    },
    {
      title: "AI-powered Resume Screening and Ranking System",
      description: "Web Application",
      imgUrl: projImg5,
      category: "python",
      projectUrl: "https://myresume-app.streamlit.app/"
    },
    {
      title: "Simple Cafe Management System",
      description: "Console-Based Application",
      imgUrl: projImg6,
      category: "python",
      projectUrl: "https://github.com/harshikab2112/Simple-Cafe-Management-System"
    },
    {
      title: "Snake Water Gun Game",
      description: "Console-Based Game",
      imgUrl: projImg7,
      category: "python",
      projectUrl: "https://github.com/harshikab2112/Snake-Water-Gun-Game"
    },
    {
      title: "Personal Portfolio Website",
      description: "Web Development",
      imgUrl: projImg8,
      category: "web",
      projectUrl: "https://portfolio-website-hb.vercel.app/"
    },
    {
      title: "Jarvis - AI Voice Assistant",
      description: "Console-Based Voice Assistant",
      imgUrl: projImg9,
      category: "python",
      projectUrl: "https://github.com/harshikab2112/Jarvis-Virtual-Assistant/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>{tabDescriptions[activeTab]}</p>

                  <Tab.Container
                    id="projects-tabs"
                    activeKey={activeTab}
                    onSelect={(k) => setActiveTab(k)}
                  >
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Python</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.filter(p => p.category === "web").map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.filter(p => p.category === "python").map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background decoration" />
    </section>
  );
};
