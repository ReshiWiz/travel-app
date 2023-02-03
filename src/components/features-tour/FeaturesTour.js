import React from "react";
import { Col } from "react-bootstrap";
import TourCard from "../../shared/TourCard";

import tourData from "../../assets/data/tours";
const FeaturesTour = () => {
  return (
    <>
      {tourData?.map((tour) => (
        <Col lg="3" className="mb-4" key={tour.id}>
          <TourCard  tour ={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturesTour;
