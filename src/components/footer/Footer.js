import React from "react";
import "./Footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  const quick_Link_1 = [
    {
      path: "/home",
      display: "home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "tours",
    },
  ];

  const quick_Link_2 = [
    {
      path: "/gallery",
      display: "gallery",
    },
    {
      path: "/login",
      display: "login",
    },
    {
      path: "/register",
      display: "Register",
    },
  ];

  const year = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="img_not_found" />
              <p>
                Traveling brings the world near to see like ever before join and
                share.
              </p>

              <div className="social-link d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-box-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer-link-title">Discover</h5>
            <ListGroup className="footer-quick-links">
              {quick_Link_1.map((item, idx) => (
                <ListGroupItem key={idx} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer-link-title">Quick Links</h5>
            <ListGroup className="footer-quick-links">
              {quick_Link_2.map((item, idx) => (
                <ListGroupItem key={idx} className="ps-0 border-0">
                  <Link to={item.path}> {item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer-link-title">contact</h5>
            <ListGroup className="footer-quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-lg-center gap-3">
                <h6>
                  <span className="mb-0 d-flex align-items-center gap-2">
                    <i className="ri-map-pin-line"></i>
                    Address:
                  </span>
                </h6>
                <p>chennai,Tamil Nadu</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-lg-center gap-3">
                <h6>
                  <span className="mb-0 d-flex align-items-center gap-2">
                    <i className="ri-mail-fill"></i>
                    Email:
                  </span>
                </h6>
                <p>world.tour@gmil.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-lg-center gap-3">
                <h6>
                  <span className="mb-0 d-flex align-items-center gap-2">
                    <i className="ri-phone-fill"></i>
                    Phone:
                  </span>
                </h6>
                <p>+123456789</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center">
            <p className="copyright pt-5">
              copyright {year}, designed and developed by Jeevanantham, All
              rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
