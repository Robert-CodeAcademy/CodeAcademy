import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

function Card({ data, singleProduct = false, description }) {
  const { title, image, price, id } = data;

  if (singleProduct) {
    return (
      <div className="single-card-container">
        <div className="header">{title}</div>
        <div>{description}</div>
        <img src={image} alt="nekoja slika" className="image"></img>
        <div className="price">Price : {price}$</div>
      </div>
    );
  }

  return (
    <div className="card-container">
      <div className="header">{title}</div>
      <img src={image} alt="nekoja slika" className="image"></img>
      <div className="price-btn-container">
        <div className="price">Price : {price}$</div>
        <NavLink to={`product/${id}`} className="btn-link">
          Link Button
        </NavLink>
      </div>
    </div>
  );
}

export default Card;
