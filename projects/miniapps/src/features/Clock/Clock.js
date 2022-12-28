import React, { useState, useEffect } from "react";
import background from "./clock.jpg";

function Clock() {
  const [clock, setClock] = useState({ sec: 0, min: 0, hr: 0, mil: 0 });

  useEffect(() => {
    setTimeout(() => {
      let time = new Date();
      let copy = { ...clock };
      copy.sec = time.getSeconds();
      copy.min = time.getMinutes();
      copy.hr = time.getHours();
      copy.mil = time.getMilliseconds();
      setClock(copy);
    }, 1000);
  }, [clock]);

  return (
    <div
      style={{
        position: "relative",
        width: "520px",
        height: "520px",
        border: "2px solid black",
        backgroundImage: `url(${background})`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "220px",
          left: "255px",
          width: "1px",
          height: "35px",
          backgroundColor: "black",
          transform: `rotate(${(clock.sec + clock.mil / 1000) * 6}deg)`,
          transformOrigin: "bottom left",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "177px",
          left: "255px",
          width: "1px",
          height: "140px",
          backgroundColor: "lightgreen",
          border: "2px solid black",
          transform: `rotate(${(clock.min + clock.sec / 60) * 6}deg)`,
          transformOrigin: "bottom left",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: "227px",
          left: "255px",
          width: "1px",
          height: "90px",
          backgroundColor: "lightgreen",
          border: "2px solid black",
          transform: `rotate(${(clock.hr + clock.min / 60) * 30}deg)`,
          transformOrigin: "bottom left",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "310px",
          left: "246px",
          width: "15px",
          height: "15px",
          backgroundColor: "lightgreen",
          border: "2px solid black",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
}

export default Clock;
