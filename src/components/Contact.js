import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const onFormUpdate = (category, value) => {
    setFormDetails(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with pre-filled message
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      `Hi Harshika,\n\nMy name is ${formDetails.firstName} ${formDetails.lastName}.\n` +
      `Email: ${formDetails.email}\nPhone: ${formDetails.phone}\n\n` +
      `${formDetails.message}`
    );

    window.location.href = `mailto:hinabansal321@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Illustration"
                />
              }
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Let’s Work Together</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="Your First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Your Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Your Email"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          required
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Your Phone Number"
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col xs={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Type your message here..."
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          required
                        ></textarea>
                        <button type="submit"><span>Send Message</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
