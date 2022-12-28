import React, { useState } from "react";
import Board from "../../components/Board";

function MineSweeper() {
  const [arr, setArr] = useState(
    Array(10)
      .fill("💣")
      .map(() => new Array(10).fill("💣"))
  );

  const [score, setScore] = useState(0);

  const getId = (x, y) => {
    let xTmp = x;
    let yTmp = y;
    let cpyScore = score;

    const doc = document.getElementById("" + xTmp + yTmp).style;
    const slctDoc = document.getElementById("mainDiv").style;

    const calc = [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 },
    ];

    if (arr[x][y] === "💣") {
      slctDoc.userSelect = "all";
    } else if (arr[x][y] !== 0 && doc.color === "transparent") {
      if (slctDoc.userSelect !== "all") cpyScore += arr[x][y];
      setScore(cpyScore);
      doc.color = "black";
      return;
    }

    doc.color = "black";

    let direct = Math.floor(Math.random() * 4);

    xTmp += calc[direct].x;
    yTmp += calc[direct].y;

    if (
      (xTmp - 0) * (xTmp - 9) <= 0 &&
      (yTmp - 0) * (yTmp - 9) <= 0 &&
      arr[xTmp][yTmp] === 0
    ) {
    } else {
      xTmp = x;
      yTmp = y;
    }

    getId(xTmp, yTmp);
  };

  const calcBomb = (i, j, copy) => {
    for (let x = i; x < i + 3; x++)
      for (let y = j; y < j + 3; y++) if (copy[x][y] !== "💣") copy[x][y]++;
    return copy;
  };

  const genBoard = (dif) => {
    document.getElementById("mainDiv").style.userSelect = "none";
    let copy = Array(10)
      .fill(0)
      .map(() => new Array(10).fill(0));
    copy.map((x, xIndex) =>
      x.map((y, yIndex) => {
        document.getElementById("" + xIndex + yIndex).style.color =
          "transparent";
        if (
          Math.floor(Math.random() * dif) === 0 &&
          (xIndex - 0) * (xIndex - 9) < 0 &&
          (yIndex - 0) * (yIndex - 9) < 0
        ) {
          copy[xIndex][yIndex] = "💣";
          calcBomb(xIndex - 1, yIndex - 1, copy);
        }
      })
    );
    setArr(copy);
    setScore(0);
  };

  return (
    <>
      <Board
        getId={getId}
        arr={arr}
        mainSqrX={"520px"}
        mainSqrY={"520px"}
        Sqr={"50px"}
        fntSze={"35px"}
        border={"1px solid black"}
      />
      <button onClick={() => genBoard(9)}>Easy</button>
      <button onClick={() => genBoard(6)}>Medium</button>
      <button onClick={() => genBoard(3)}>Hard</button>
      <p>Score: {score}</p>
    </>
  );
}

export default MineSweeper;
