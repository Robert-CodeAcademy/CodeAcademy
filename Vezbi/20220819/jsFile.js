i = 0;
let niza = [
  /* Optional... enter elements here and comment the do.. while */
];

// do.. while imports elements into array!
do {
  promptVal = prompt("Press any NaN to stop... enter niza[" + i + "]:");
  niza[i] = promptVal * 1;
  i++;
} while (!isNaN(promptVal));
niza.pop();

console.log(niza + " - initial array: ");

function allInOne() {
  sum = 0;
  let nizaClear = [];
  let duplicates = [];

  // Bubble Sort method step by step...
  for (i = 0; i < niza.length; i++) {
    for (j = i; j < niza.length; j++) {
      if (niza[i] > niza[j]) {
        a = niza[i];
        niza[i] = niza[j];
        niza[j] = a;
      }
    }

    sum += niza[i]; // Sums initial array!

    nizaClear.includes(niza[i])
      ? duplicates.includes(niza[i])
        ? {}
        : duplicates.push(niza[i]) // Creates array of duplicates!
      : nizaClear.push(niza[i]); // Cleans initial array creating new one!
  }

  return `${sum} - sum of initial array:\n${niza} - ascending elements!\n${nizaClear} - cleaned array!\n${duplicates} - duplicate(s)!`;
}

console.log(allInOne());
