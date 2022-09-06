function findMax(arrNum) {
  max = 0;
  for (element of arrNum) {
    element > max ? (max = element) : {};
  }
  return max;
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

console.log(findMax(arrNum));
