import React, { useState } from "react";
import Board from "../../components/Board";
import background from "./calc.jpg";

function Calculator() {
  const [arr, setArr] = useState(
    Array(20)
      .fill("")
      .map(() => new Array(15).fill(""))
  );

  let copy = Array(12)
    .fill("")
    .map(() => new Array(15).fill(""));

  copy = [
    ...copy,
    ["", "", "", "%", "%", "7", "7", "8", "8", "9", "9", "*", "*", "/", "/"],
    ["", "", "", "%", "%", "7", "7", "8", "8", "9", "9", "*", "*", "/", "/"],
    ["", "", "", "√", "√", "4", "4", "5", "5", "6", "6", "-", "-", "", ""],
    ["", "", "", "√", "√", "4", "4", "5", "5", "6", "6", "-", "-", "", ""],
    ["", "", "", "@", "@", "1", "1", "2", "2", "3", "3", "+", "+", "", ""],
    ["", "", "", "@", "@", "1", "1", "2", "2", "3", "3", "+", "+", "", ""],
    ["", "", "", "", "", "0", "0", ".", ".", "=", "=", "+", "+", "", ""],
    ["", "", "", "", "", "0", "0", ".", ".", "=", "=", "+", "+", "", ""],
  ];

  let num1 = "";
  let num2 = "";
  let opr = "";

  const getId = (x, y) => {
    if (copy[x][y] !== "") {
      const oprs = "%*/√-+";
      const nums = ".0123456789";
      const isNum = nums.includes(copy[x][y]);
      const disp = document.getElementById("75");

      if (oprs.includes(copy[x][y])) opr = copy[x][y];

      if (opr !== "" && isNum) {
        num2 += copy[x][y];
      } else if (isNum) num1 += copy[x][y];

      if (copy[x][y] === "@") {
        if (num2 !== "") num2 = num2.slice(0, -1);
        else if (opr === "") num1 = num1.slice(0, -1);
        else opr = "";
      }

      if (copy[x][y] === "=") {
        switch (opr) {
          case "+":
            num1 = num1 * 1 + num2 * 1 + "";
            break;
          case "-":
            num1 = num1 * 1 + num2 * -1 + "";
            break;
          case "*":
            num1 = num1 * 1 * num2 + "";
            break;
          case "/":
            num1 = (num1 * 1) / num2 + "";
            break;
          case "%":
            num1 = num1 * (num2 / 100) + "";
            break;
          case "√":
            num1 = Math.sqrt(num1) + "";
            break;
          default:
        }
        num2 = "";
        opr = "";
      }
      let txt = num1 + opr + num2;
      disp.innerText = txt.substring(0, 17);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Board
        getId={getId}
        arr={arr}
        mainSqrX={"345px"}
        mainSqrY={"460px"}
        Sqr={"21px"}
        fntSze={"20px"}
        border={"1px solid transparent"}
      />
    </div>
  );
}

export default Calculator;
