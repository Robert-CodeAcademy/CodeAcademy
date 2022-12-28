import React, { useState, useEffect } from "react";
import Card from "./Card";

function Cards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setData(json);
      });
  }, []);

  if (loading) {
    return <div className="content-container">Loading...</div>;
  }

  return (
    <div className="content-container">
      {data.map((item) => {
        return <Card data={item} />;
      })}
    </div>
  );
}

export default Cards;
