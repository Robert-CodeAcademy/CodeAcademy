import React from "react";
import paper from "./paper.jpg";
import rock from "./rock.jpg";
import scissors from "./scissors.jpg";

function RockPaperScissors() {
  const imgArr = [paper, rock, scissors];

  const rndm = (x) => {
    return ~~(Math.random() * x);
  };

  const game = (myMove) => {
    document.getElementById("myMove").src = imgArr[myMove];
    let aiMove = rndm(3);
    document.getElementById("aiMove").src = imgArr[aiMove];
    const tmp = document.getElementById("chngTxt");
    if (
      (myMove === 0 && aiMove === 1) ||
      (myMove === 1 && aiMove === 2) ||
      (myMove === 2 && aiMove === 0)
    )
      tmp.innerText = "YOU WON!";
    else if (myMove === aiMove) tmp.innerText = "NO WON!";
    else tmp.innerText = "AI WON!";
  };

  return (
    <>
      <img id="myMove" src={paper} alt="myMove"></img>
      <img id="aiMove" src={paper} alt="aiMove"></img>
      <div>
        <button onClick={() => game(0)}>paper</button>
        <button onClick={() => game(1)}>rock</button>
        <button onClick={() => game(2)}>scissors</button>
        <p id="chngTxt">NO WON!</p>
      </div>
    </>
  );
}

export default RockPaperScissors;
