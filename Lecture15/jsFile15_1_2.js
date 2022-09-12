function checkString(checkStr) {
  return (cond = !/\d/.test(checkStr) && checkStr != ""); // Returns false if number included!
}

function checkForm(fname, lname, email, telNum, addr) {
  checkString(fname) ? {} : (fname = "This field should contain NaN chars!");
  checkString(lname) ? {} : (lname = "This field should contain NaN chars!");
  email.includes("@") ? {} : (email = "This field should contain '@' char!");
  !(telNum.length < 9) && !isNaN(telNum * 1)
    ? {}
    : (telNum = "This field should contain not less then 9 numbers!");
  checkString(addr) ? {} : (addr = "This field should contain NaN chars!");

  alert(
    `Name: ${fname}\nLast name: ${lname}\nEmail: ${email}\nTel: ${telNum}\nAddress: ${addr}`
  );
}

function onBlurInput(divID) {
  divElem = document.getElementById("div" + divID).classList;
  document.getElementById("i" + divID).value == ""
    ? divElem.remove("whiteText")
    : divElem.add("whiteText");
}
