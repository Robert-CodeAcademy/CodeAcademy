import React, { useState } from "react";
import Board from "../../components/Board";

function XO() {
  const [arr, setArr] = useState(
    Array(3)
      .fill("")
      .map(() => new Array(3).fill(""))
  );

  const [wonMsg, setWonMsg] = useState("NO WON!");

  let copy = [...arr];

  const calc = ["012", "345", "678", "036", "147", "258", "048", "246"];

  const rndm = (x) => {
    return ~~(Math.random() * x);
  };

  const get2Dindx = (z, x, y) => {
    return [(x = ~~(z / 3)), (y = z % 3)];
  };

  const sign = (z) => {
    let w = rndm(3);
    let xy = get2Dindx(rndm(8));
    if (z !== 8) xy = get2Dindx(calc[z][w]);
    if (copy[xy[0]][xy[1]] === "") {
      copy[xy[0]][xy[1]] = "O";
      setArr(copy);
      return;
    }
    sign(z);
  };

  const getId = (x, y) => {
    if (copy[x][y] !== "") return;
    copy[x][y] = "X";
    setArr(copy);
    let max, zTmp;
    max = zTmp = 0;
    for (let z = 0; z < 8; z++) {
      let def, off, ntrl, complx, wonX;
      def = off = ntrl = complx = wonX = 0;

      for (let w = 0; w < 3; w++) {
        let xy = get2Dindx(calc[z][w]);
        if (copy[xy[0]][xy[1]] !== "") ntrl++;
        if (copy[xy[0]][xy[1]] === "X") {
          def++;
          wonX++;
        }
        if (copy[xy[0]][xy[1]] === "O") off++;
      }

      if (off === 2) complx = 10;
      if (def === 2) complx = 9;
      if (off === 1) complx = 8;
      if (ntrl === 3) complx = 7;
      if (def === 1) complx = 6;

      if (wonX === 3 && wonMsg === "NO WON!") setWonMsg("YOU WON!");

      if (complx > max) {
        max = complx;
        zTmp = z;
      }
    }

    switch (max) {
      case 8:
      case 9:
        sign(zTmp);
        break;
      case 10:
        sign(zTmp);
        if (wonMsg === "NO WON!") setWonMsg("AI WON!");
        break;
      case 6:
      case 7:
        sign(8);
        break;
      default:
    }
  };

  const genBoard = () => {
    let copy = Array(3)
      .fill("")
      .map(() => new Array(3).fill(""));

    if (rndm(2) === 0) {
      let xy = get2Dindx(rndm(9));
      copy[xy[0]][xy[1]] = "O";
    }
    setArr(copy);

    setWonMsg("NO WON!");
  };

  return (
    <>
      <Board
        getId={getId}
        arr={arr}
        mainSqrX={"516px"}
        mainSqrY={"516px"}
        Sqr={"170px"}
        fntSze={"100px"}
        border={"1px solid black"}
      />
      <button onClick={() => genBoard()}>Start New Game</button>
      <p>{wonMsg}</p>
    </>
  );
}

export default XO;
