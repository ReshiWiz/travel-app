import React from "react";
import "./services.css";

const ServicesCard = ({ items }) => {
  const { img, title, desc } = items;
  return (
    <div className="services-items">
      <div className="server_img">
        <img src={img} alt="img_not_found" />
      </div>
      
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
};

export default ServicesCard;
