import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

function Header() {
  const [data, setData] = useState(["Home"]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setData([...data, ...json]));
  }, []);

  if (data.length === 0) {
    <div className="header-container"></div>;
  }

  return (
    <div className="header-container">
      <div className="nav-container">
        {data.map((item) => {
          return (
            <NavLink
              to={item === "Home" ? "/" : `category/${item}`}
              className="btn-nav"
            >
              {item}{" "}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
