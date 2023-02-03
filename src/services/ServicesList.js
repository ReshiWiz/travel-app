import React from "react";
import ServicesCard from "./ServicesCard";
import { Col } from "react-bootstrap";

import weatherImg from "../assets/images/weather.png";
import guidImg from "../assets/images/guide.png";
import customization from "../assets/images/customization.png";

const servicesData = [
  {
    img: weatherImg,
    title: "Calculate Weather",
    desc: "As the winds goes so soul travels",
  },
  {
    
    img: guidImg,
    title: "guid for trip",
    desc: "As for the winds for the souls goes",
  },
  {
    img: customization,
    title: "customization",
    desc: "As for the winds for the souls goes",
  },
];
const ServicesList = ({ items }) => {
  return (
    <>
      {servicesData.map((ele, idx) => (
        <Col lg="3" key={idx}>
          <ServicesCard items={ele} />
        </Col>
      ))}
    </>
  );
};

export default ServicesList;
