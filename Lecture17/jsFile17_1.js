function checkForm() {
  object = [
    { name: "Tel", message: "Value is not in 07x-xxx-xxx format!" },
    {
      name: "Pass",
      message:
        "At least one upper case, one lower case, one digit, one special character and minimum eight in length!",
    },
    {
      name: "Email",
      message: "Value shoud contain '@' and after '.' at list two in length!",
    },
    {
      name: "Num",
      message: "Value of two digits!",
    },
  ];

  doc = document;

  for (obj of object) {
    docu = doc.getElementById("i" + obj.name);
    doc.getElementById("div" + obj.name).innerHTML =
      docu.value == "" ? obj.message : docu.checkValidity() ? "" : obj.message;
  }

  doc.getElementById("divGender").innerHTML =
    doc.getElementById("gMail").checked || doc.getElementById("gFemail").checked
      ? ""
      : "Select an option!";
}
