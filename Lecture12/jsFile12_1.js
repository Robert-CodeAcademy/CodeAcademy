function removeElement(arrNum, element) {
  i = 0;
  do {
    arrNum[i] == element ? arrNum.splice(i, 1) : i++; // Index increments only on false, to remove an element entered 1+ time(s)!
  } while (i < arrNum.length);
  return arrNum;
}

i = 0;
let arrNum = [
  /* Optional... enter elements here and comment the do.. while */
];

do {
  promptVal = Number(
    prompt("Press any NaN to stop... enter arrNum[" + i + "]:")
  );
  arrNum[i] = promptVal;
  i++;
} while (!isNaN(promptVal));
arrNum.pop();

element = prompt(arrNum + "\narrNum element to remove:");

console.log(removeElement(arrNum, element));
