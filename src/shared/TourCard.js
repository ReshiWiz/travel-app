import React from "react";
import tourCard from "./tourCard.css";
import calculateAvgRating from "../units/AvgCount";
import { Card } from "react-bootstrap";
import CardBody from "react-bootstrap/Card"
import { Link } from "react-router-dom";

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, reviews } = tour;
 
  const {totalRating,avgRating} = calculateAvgRating(reviews)

  return (
    <div className="tour-card">
      <Card>
        <div className="tour_img">
          <img src={photo} alt="img_not_found" />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className="card-top d-flex align-items-center justify-content-center">
            <span className="tour-location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i>
              {city}
            </span>
            <span className="tour-rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i>
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? "not Rated" : <span>{reviews.length}</span>}
            </span>
          </div>
          <h5 className="tour-title">
            <Link to={`/tours/${id}`}>
              {title}

              <div className="card-bottom d-flex align-items-center justify-content-center mt-3">
                <h5>
                  ${price} <span>/per person</span>
                </h5>

                <button type="button" className="btn booking-btn">
                  <Link to={`/tours/${id}`}>Book now</Link>
                </button>
              </div>
            </Link>
          </h5>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
