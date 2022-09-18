age = localStorage.getItem("age");
fName = sessionStorage.getItem("name");

localStorage.getItem("age") == null
  ? (age = prompt("Enter age? "))(localStorage.setItem("age", age))
  : {};
sessionStorage.getItem("name") == null
  ? (fName = prompt("Enter name? "))(sessionStorage.setItem("name", fName))
  : {};
