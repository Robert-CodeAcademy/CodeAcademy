async function fechText() {
  first = await fetch("first.txt");
  if (first.status == 200) {
    firstText = await first.text();
  } else alert("first.txt renamed or deleted!");

  second = await fetch("second.txt");
  if (second.status == 200) {
    secondText = await second.text();
  } else alert("second.txt renamed or deleted!");

  document.getElementById("fillText").innerText =
    firstText.length > secondText.length ? firstText : secondText;
}

fechText();
