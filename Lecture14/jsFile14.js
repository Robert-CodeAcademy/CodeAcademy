document.body.children[0].classList.add("btn", "btn-danger"); // Adds Bootstrap Button Styles!

function createAndFillTable() {
  topChemists = [
    { firstname: "Alfred ", lastname: "Nobel" },
    { firstname: "Dmitri ", lastname: "Mendeleev" },
    { firstname: "Marie ", lastname: "Curie" },
    { firstname: "Alice ", lastname: "Ball" },
    { firstname: "Dorothy ", lastname: "Hodgkin" },
    { firstname: "Rosalind ", lastname: "Franklin" },
    { firstname: "Marie ", lastname: "Maynard Daly" },
    { firstname: "Mario ", lastname: "Molina" },
  ];

  row = document.body.children[1].children[1];

  // Adds Bootstrap Table Styles!
  row.classList.add("table", "table-striped", "table-hover", "table-bordered");

  // Within For loop... processes of generating rows, cells, li elements and fill text as well!
  for (i = 0; i < topChemists.length; i++) {
    row.insertRow();
    row.rows[i].insertCell();
    row.rows[i].cells[0].textContent = topChemists[i].firstname;
    row.rows[i].insertCell();
    row.rows[i].cells[1].textContent = topChemists[i].lastname;

    var x = document.createElement("li");
    var t = document.createTextNode(
      topChemists[i].firstname + topChemists[i].lastname
    );
    x.appendChild(t);
    document.body.children[2].appendChild(x);
  }

  elem = document.body.children[2].children[0];
  stl = 1;

  // While loop applies <li> color style!
  while (elem != null) {
    stl == 1
      ? (elem.style.background = "red")
      : (elem.style.background = "yellow");
    stl *= -1;
    elem = elem.nextSibling;
  }

  document.querySelector("li").style.fontSize = "30px"; // 3rd homework... changes first <li> fontSize!
}

// On Submit, changes 1st <li> textContent with returned input form values!
function logValues(fname) {
  document.querySelector("li").textContent = fname + ", The Alchemist!";
}
