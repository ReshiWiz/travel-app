import React from "react";
import "../styles/home.css";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServicesList from "../services/ServicesList";
import FeaturesTour from "../components/features-tour/FeaturesTour";
import Testimonial from "../components/Testimonial/Testimonial";
import NewsLetters from "../shared/NewsLetters";
import MasonryImageGallery from "../components/Image-gallery/MasonryImageGallery";
import { Container, Row, Col } from "react-bootstrap";

import heroImg01 from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import WorldIMg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

export default function Home() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero-container">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before you go"} />
                  <img src={WorldIMg} alt="img_not_found" />
                </div>
                <h1>
                  Traveling is treasure saving for
                  <span className="highlight"> memories</span>
                </h1>
                <p>
                  The sound of natural seen only by sensing the infinity of
                  beauty in it ... As the result windows are always open to
                  experience the incredible beauty in it. Journey is always a
                  path to seek incredible within and out .
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero-img-box ">
                <img src={heroImg01} alt="img-not-found" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero-img-box mt-4">
                <video src={heroVideo} alt="img-not-found" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero-img-box mt-5">
                <img src={heroImg02} alt="img-not-found" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services-subtile">Our services</h5>
              <h2 className="services-title">Services level business class</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* >>>----------- tour section  start ------------>> */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"}></Subtitle>
              <h2 className="featured-tour-title">Our features tours</h2>
            </Col>
            <FeaturesTour />
          </Row>
        </Container>
      </section>
      {/* >>>----------- tour section end ------------>> */}

      {/* >>>------------ experience section start ------------>>*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience-container">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  We are as family when we move out with guid <br />
                  our achievements every day grows up with you...
                </p>
              </div>
              <div className="counter-wrapper d-flex align-items-center gap-5">
                <div className="counter-box">
                  <span>43k+</span>
                  <h6>successful Trip</h6>
                </div>
                <div className="counter-box">
                  <span>9k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter-box">
                  <span>13</span>
                  <h6>year experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience-img">
                <img src={experienceImg} alt="img-not-found" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* >>>------------ experience section end------------>>*/}

      {/* >>>------------ gallery section start------------>>*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"gallery"} />
              <h2 className="gallery-title">
                Visit our Customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImageGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* >>>------------ gallery section end------------>>*/}

      {/* >>>------------ testimonial  section start------------>>*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"}></Subtitle>
              <h2 className="testimonial-title">What out fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetters/>
      {/* >>>------------ testimonial  section start------------>>*/}
    </>
  );
}
