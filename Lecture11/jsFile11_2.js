// Commented function does the same as following one...

function getDaysInMonth(year, month) {
  text = "1 3 5 7 8 10 12"; //Array alternative... useful to check value includes in array of strings!
  month == 2
    ? year % 4 == 0
      ? (returnVal = 29)
      : (returnVal = 28)
    : text.includes(month)
    ? (returnVal = 31)
    : (returnVal = 30);
  return returnVal;
}

// function getDaysInMonth(year, month) {
//   return new Date(year, month, 0).getDate();
// }

month = prompt("Enter month ordinal number (1 - 12)?");
if (month == 2) {
  year = prompt("Enter year?");
  console.log(getDaysInMonth(year, month));
} else {
  console.log(getDaysInMonth(2022, month));
}
