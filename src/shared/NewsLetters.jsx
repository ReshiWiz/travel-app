import React from "react";
import "./NewsLetters.css";

import { Container, Row, Col } from "react-bootstrap";
import mTour from "../assets/images/male-tourist.png";

const NewsLetters = () => {
  return (
    <section className="newsLetter">
      <Row>
        <Col lg="6">
          <div className="newLetters-content">
            <h2>Subscribe now to get useful traveling information</h2>
            <div className="newsLetter-input">
              <input type="email" placeholder="Enter your Email" />
              <button className="btn newLetter-btn">Subscribe</button>
            </div>
            <p>
              Planing for a tour...? Subscribe to "travel world" to know more
              content have amazing experience of traveling around the world with
              experienced guid. Best choice for solo & family tour.
            </p>
          </div>
        </Col>
        <Col lg="6">
          <div className="newsLetter-img">
            <img src={mTour} alt="img-not-found" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default NewsLetters;
