function changeHref(pageHref) {
  location.href = pageHref + ".html";
}

function sumCalc() {
  sum = 0;

  a = prompt("a = ? ") * 1;
  b = prompt("b = ? ") * 1;
  sum = a + b;

  document.getElementById("text").innerHTML = a + " + " + b + " = " + sum;
}

function repeatLorem() {
  newPara = document.createElement("p");
  node = document.createTextNode(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente porro corrupti provident incidunt neque perferendis facere ex amet? Tenetur tempora explicabo natus ex rem laudantium quos eligendi quaerat, itaque consequatur!"
  );
  newPara.appendChild(node);

  element = document.getElementById("text");
  element.appendChild(newPara);
}

function checkString(checkStr) {
  return (cond = !/\d/.test(checkStr) && checkStr != "");
  //   cond = 0;
  //   if (checkStr != "") {
  //     for (i = 0; i < checkStr.length; i++) {
  //       if (isNaN(checkStr[i])) cond = 1;
  //       else {
  //         cond = 0;
  //         break;
  //       }
  //     }
  //   }
  //   return cond;
}

function checkForm(fname, lname, email, gender, telNum, addr) {
  checkString(fname) ? {} : (fname = "This field should contain NaN chars!");
  checkString(lname) ? {} : (lname = "This field should contain NaN chars!");
  email.includes("@") ? {} : (email = "This field should contain '@' char!");
  gender != "" ? {} : (gender = "An option should be selected!");
  !(telNum.length < 9) && !isNaN(telNum * 1)
    ? {}
    : (telNum = "This field should contain not less then 9 numbers!");
  checkString(addr) ? {} : (addr = "This field should contain NaN chars!");

  console.log(
    "Ime: " + fname,
    "\nPrezime: " + lname,
    "\nEmail: " + email,
    "\nMasko/Zensko: " + gender,
    "\nTel: " + telNum,
    "\nAdresa: " + addr
  );
}

document.getElementById("redText").classList.add("redText");
hrefSplit = location.href.split("/");
hrefSplit[hrefSplit.length - 1] == "about.html"
  ? setInterval(repeatLorem, 10000)
  : {};
