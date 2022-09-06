i = 0;
// Digits counter function using math method!
function digitsCount(num) {
  do {
    i++;
    iPow = Math.pow(10, i);
  } while (num % iPow != num);
  return i;
}

/* Chars countung method! */
// function digitsCount(num) {
//   do {
//     i++;
//   } while (!isNaN(num[i]));
//   return i;
// }

console.log(digitsCount(prompt("Enter number:")));
