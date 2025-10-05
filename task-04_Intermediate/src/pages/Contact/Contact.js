import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <section
      className="contact_section"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        minHeight: '100vh',
        padding: '120px 0 80px', // Shifted content down
      }}
    >
      <Container>
        {/* Header Section */}
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h1 className="text-white display-4 mb-3">Get In Touch</h1>
            <p className="text-white lead">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </Col>
        </Row>

        <Row>
          {/* Contact Form */}
          <Col lg={8} className="mb-5 mb-lg-0">
            <div
              className="contact_form_wrapper p-4 rounded"
              style={{ background: 'rgba(255,255,255,0.95)' }}
            >
              <h3 className="mb-4" style={{ color: '#333' }}>Send us a Message</h3>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: '#333', fontWeight: '600' }}>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your first name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: '#333', fontWeight: '600' }}>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your last name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#333', fontWeight: '600' }}>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#333', fontWeight: '600' }}>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter your phone number" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label style={{ color: '#333', fontWeight: '600' }}>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Tell us about your inquiry..." />
                </Form.Group>
                <Button type="submit" className="btn order_now w-100 py-3" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          {/* Contact Info */}
          <Col lg={4}>
            <div className="contact_info text-white">
              <div className="info_item mb-5">
                <div className="position-relative mb-4">
                  <div className="price_badge" style={{ position: 'static', transform: 'none' }}>
                    <div className="badge_text text-center">
                      <h4 className="h4_xs text-white">Visit Us</h4>
                      <h4 className="h3_lg text-white">Today</h4>
                    </div>
                  </div>
                </div>
                <p className="mb-2">
                  <i className="fas fa-map-marker-alt me-3" style={{ color: '#ff6b6b' }}></i>
                  123 Burger Street, Food City, FC 12345
                </p>
              </div>

              <div className="info_item mb-5">
                <h3 className="text-white mb-3">Opening Hours</h3>
                <div className="time_slot mb-2"><strong>Mon - Fri:</strong> 9:00 AM - 10:00 PM</div>
                <div className="time_slot mb-2"><strong>Saturday:</strong> 10:00 AM - 11:00 PM</div>
                <div className="time_slot"><strong>Sunday:</strong> 11:00 AM - 9:00 PM</div>
              </div>

              <div className="info_item mb-5">
                <h3 className="text-white mb-3">Contact Info</h3>
                <p className="mb-2"><i className="fas fa-phone me-3" style={{ color: '#ff6b6b' }}></i>+1 (555) 123-4567</p>
                <p className="mb-2"><i className="fas fa-envelope me-3" style={{ color: '#ff6b6b' }}></i>hello@burgerplace.com</p>
              </div>

              <div className="info_item">
                <h3 className="text-white mb-3">Follow Us</h3>
                <div className="social_links">
                  <Link to="#" className="text-white me-3"><i className="fab fa-facebook"></i></Link>
                  <Link to="#" className="text-white me-3"><i className="fab fa-instagram"></i></Link>
                  <Link to="#" className="text-white me-3"><i className="fab fa-twitter"></i></Link>
                  <Link to="#" className="text-white"><i className="fab fa-tiktok"></i></Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Map Section */}
        <Row className="mt-5">
          <Col lg={12}>
            <div className="map_container rounded" style={{ overflow: 'hidden', height: '400px' }}>
              {/* Embedded Google Map */}
              <iframe
                title="Burger Place Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.746244401213!2d-73.98715528459373!3d40.74189587932769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18a904b1%3A0x2f3c726c6d3c3e4a!2sFlatiron%20Building!5e0!3m2!1sen!2sus!4v1696387967411!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
