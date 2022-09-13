function stPaSt(delay, number) {
  elem = document.getElementById("startPauseBtn");
  eleme = document.getElementById("divID");

  eleme.innerHTML >= number ? (eleme.innerHTML = number) : {}; //Resets timer to number value!

  elem.innerHTML == "▶ Start"
    ? (elem.innerHTML = "|| Pause")(
        setTimeout(function () {
          interval = setInterval(function () {
            eleme.innerHTML >= number
              ? clearInterval(interval) // Timer stops on number reached!
              : eleme.innerHTML++; // Timer increments on Start clicked!
          }, 1000);
        }, delay)
      )
    : clearInterval(interval); // Timer stops on Pause clicked!
  elem.innerHTML = "▶ Start";
}
