import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Michael Rodriguez",
      position: "Head Chef",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=400&fit=crop&crop=face",
      experience: "15+ years",
      specialty: "Gourmet Burgers"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop&crop=face",
      experience: "10+ years",
      specialty: "Desserts & Baking"
    }
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "10k+", label: "Happy Customers" },
    { number: "50+", label: "Menu Items" },
    { number: "15+", label: "Awards Won" }
  ];

  return (
    <section className="about_section" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)', minHeight: '100vh', padding: '150px 0' }}>
      {/* Hero Section */}
      <Container>
        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&h=500&fit=crop" 
                className="img-fluid rounded-3" 
                alt="Our Restaurant" 
              />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Since</h4>
                  <h4 className="h3_lg">2018</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero_text">
              <span className="text-red-600 font-semibold tracking-wide uppercase">
                Our Story
              </span>
              <h1 className="text-white display-4 mb-4">Welcome to BurgerPlace</h1>
              <p className="text-white lead mb-4">
                Founded in 2018, BurgerPlace began as a small family dream to share 
                our passion for authentic, delicious burgers with the world. What started 
                as a humble food truck has grown into a beloved local institution.
              </p>
              <p className="text-white mb-4">
                We believe in using only the finest ingredients, sourced locally whenever 
                possible. Every burger is crafted with care, passion, and the secret 
                family recipes that have been passed down through generations.
              </p>
              <Link to="/contact" className="btn order_now me-3">
                Visit Us
              </Link>
              <Link to="/menu" className="btn" style={{ border: '2px solid #ff6b6b', color: '#ff6b6b', padding: '10px 30px', borderRadius: '8px' }}>
                View Menu
              </Link>
            </div>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="text-center mb-5 py-5">
          {stats.map((stat, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <div className="stat_item">
                <h2 className="text-white display-4 fw-bold" style={{ color: '#ff6b6b' }}>{stat.number}</h2>
                <p className="text-white h5">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Mission Section */}
        <Row className="py-5 align-items-center">
          <Col lg={8} className="mx-auto text-center">
            <div className="position-relative mb-4">
              <div className="price_badge" style={{ position: 'static', transform: 'none', display: 'inline-block' }}>
                <div className="badge_text text-center">
                  <h4 className="h4_xs">Our</h4>
                  <h4 className="h3_lg">Mission</h4>
                </div>
              </div>
            </div>
            <h3 className="text-white mb-4">Quality & Passion in Every Bite</h3>
            <p className="text-white lead mb-4">
              Our mission is simple: to create the most memorable dining experience 
              through exceptional food, warm hospitality, and a commitment to quality 
              that never compromises.
            </p>
            <div className="row mt-5">
              <Col md={4} className="mb-4">
                <div className="feature_item text-white">
                  <i className="fas fa-leaf mb-3" style={{ fontSize: '3rem', color: '#ff6b6b' }}></i>
                  <h5>Fresh Ingredients</h5>
                  <p>Locally sourced, always fresh</p>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <div className="feature_item text-white">
                  <i className="fas fa-heart mb-3" style={{ fontSize: '3rem', color: '#ff6b6b' }}></i>
                  <h5>Made with Love</h5>
                  <p>Passion in every recipe</p>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <div className="feature_item text-white">
                  <i className="fas fa-award mb-3" style={{ fontSize: '3rem', color: '#ff6b6b' }}></i>
                  <h5>Award Winning</h5>
                  <p>Recognized excellence</p>
                </div>
              </Col>
            </div>
          </Col>
        </Row>

        {/* Team Section */}
        <Row className="py-5">
          <Col lg={12} className="text-center mb-5">
            <div className="position-relative mb-4">
              <div className="price_badge" style={{ position: 'static', transform: 'none', display: 'inline-block' }}>
                <div className="badge_text text-center">
                  <h4 className="h4_xs">Meet Our</h4>
                  <h4 className="h3_lg">Team</h4>
                </div>
              </div>
            </div>
            <h3 className="text-white mb-4">The Masters Behind the Magic</h3>
          </Col>
          
          {teamMembers.map((member) => (
            <Col lg={6} key={member.id} className="mb-4">
              <Card className="border-0 rounded-3 overflow-hidden" style={{ background: 'rgba(255,255,255,0.95)' }}>
                <Row className="g-0">
                  <Col md={4}>
                    <img 
                      src={member.image} 
                      className="img-fluid h-100" 
                      alt={member.name}
                      style={{ objectFit: 'cover', minHeight: '200px' }}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body className="p-4">
                      <h4 className="card-title" style={{ color: '#333' }}>{member.name}</h4>
                      <h6 className="text-red-600 mb-3">{member.position}</h6>
                      <p className="text-muted mb-2">
                        <strong>Experience:</strong> {member.experience}
                      </p>
                      <p className="text-muted mb-3">
                        <strong>Specialty:</strong> {member.specialty}
                      </p>
                      <div className="social_links">
                        <Link to="#" className="text-muted me-3">
                          <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="#" className="text-muted">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Restaurant Environment */}
        <Row className="py-5 align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=500&fit=crop" 
              className="img-fluid rounded-3" 
              alt="Restaurant Interior" 
            />
          </Col>
          <Col lg={6}>
            <div className="hero_text">
              <span className="text-red-600 font-semibold tracking-wide uppercase">
                Our Space
              </span>
              <h2 className="text-white mb-4">Comfort Meets Quality</h2>
              <p className="text-white mb-4">
                Our restaurant is designed to provide the perfect atmosphere for 
                enjoying great food with friends and family. From cozy booths to 
                our beautiful outdoor patio, every space is crafted with your 
                comfort in mind.
              </p>
              <div className="row text-white">
                <Col sm={6} className="mb-3">
                  <p><i className="fas fa-wifi me-2" style={{ color: '#ff6b6b' }}></i> Free WiFi</p>
                  <p><i className="fas fa-utensils me-2" style={{ color: '#ff6b6b' }}></i> Outdoor Seating</p>
                </Col>
                <Col sm={6} className="mb-3">
                  <p><i className="fas fa-car me-2" style={{ color: '#ff6b6b' }}></i> Parking Available</p>
                  <p><i className="fas fa-wheelchair me-2" style={{ color: '#ff6b6b' }}></i> Wheelchair Accessible</p>
                </Col>
              </div>
            </div>
          </Col>
        </Row>

        {/* Food Gallery */}
        <Row className="py-5">
          <Col lg={12} className="text-center mb-5">
            <div className="position-relative mb-4">
              <div className="price_badge" style={{ position: 'static', transform: 'none', display: 'inline-block' }}>
                <div className="badge_text text-center">
                  <h4 className="h4_xs">Our</h4>
                  <h4 className="h3_lg">Specialties</h4>
                </div>
              </div>
            </div>
            <h3 className="text-white mb-4">Signature Creations</h3>
          </Col>
          <Col md={4} className="mb-4">
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" 
              className="img-fluid rounded-3" 
              alt="Signature Burger" 
            />
            <h5 className="text-white text-center mt-3">Classic Beef Burger</h5>
          </Col>
          <Col md={4} className="mb-4">
            <img 
              src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&h=300&fit=crop" 
              className="img-fluid rounded-3" 
              alt="Gourmet Pizza" 
            />
            <h5 className="text-white text-center mt-3">Wood-Fired Pizza</h5>
          </Col>
          <Col md={4} className="mb-4">
            <img 
              src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?w=400&h=300&fit=crop" 
              className="img-fluid rounded-3" 
              alt="Fresh Salad" 
            />
            <h5 className="text-white text-center mt-3">Garden Fresh Salad</h5>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row className="py-5 text-center">
          <Col lg={8} className="mx-auto">
            <div className="cta_content">
              <h2 className="text-white mb-4">Ready to Taste the Difference?</h2>
              <p className="text-white lead mb-4">
                Join us for an unforgettable dining experience. Book your table today 
                or order online for pickup.
              </p>
              <Link to="/contact" className="btn order_now me-3">
                Book a Table
              </Link>
              <Link to="/menu" className="btn" style={{ border: '2px solid #ff6b6b', color: '#ff6b6b', padding: '10px 30px', borderRadius: '8px' }}>
                Order Online
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;