import React from "react";

function Board({ getId, arr, mainSqrX, mainSqrY, Sqr, fntSze, border }) {
  return (
    <div
      id="mainDiv"
      style={{
        position: "relative",
        width: mainSqrX,
        height: mainSqrY,
        border: "1px solid black",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {arr.map((x, xIndex) =>
        x.map((y, yIndex) => (
          <div
            id={"" + xIndex + yIndex}
            onClick={() => getId(xIndex, yIndex)}
            style={{
              width: Sqr,
              height: Sqr,
              border: border,
              fontSize: fntSze,
              textAlign: "center",
            }}
          >
            {arr[xIndex][yIndex]}
          </div>
        ))
      )}
    </div>
  );
}

export default Board;
