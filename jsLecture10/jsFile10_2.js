sumChr = 0;
fullName = "";
ddBirth = "05";
yrBirth = 1974;
iAmThe = "I am the ";

firstName = {
  chr1: "R",
  chr2: "o",
  chr3: "b",
  chr4: "e",
  chr5: "r",
  chr6: "t",
  chr7: "",
  chr8: "",
  chr9: "",
  chr10: "",
};

lastName = {
  chr1: "A",
  chr2: "v",
  chr3: "r",
  chr4: "a",
  chr5: "m",
  chr6: "o",
  chr7: "v",
  chr8: "s",
  chr9: "k",
  chr10: "i",
};

// Usage of length property, trim and substr method, excluded!

Number(firstName.chr1) != 0 ? ((fullName += firstName.chr1), ++sumChr) : {};
Number(firstName.chr2) != 0 ? ((fullName += firstName.chr2), ++sumChr) : {};
Number(firstName.chr3) != 0 ? ((fullName += firstName.chr3), ++sumChr) : {};
Number(firstName.chr4) != 0 ? ((fullName += firstName.chr4), ++sumChr) : {};
Number(firstName.chr5) != 0 ? ((fullName += firstName.chr5), ++sumChr) : {};
Number(firstName.chr6) != 0 ? ((fullName += firstName.chr6), ++sumChr) : {};
Number(firstName.chr7) != 0 ? ((fullName += firstName.chr7), ++sumChr) : {};
Number(firstName.chr8) != 0 ? ((fullName += firstName.chr8), ++sumChr) : {};
Number(firstName.chr9) != 0 ? ((fullName += firstName.chr9), ++sumChr) : {};
Number(firstName.chr10) != 0 ? ((fullName += firstName.chr10), ++sumChr) : {};
fullName += " ";
Number(lastName.chr1) != 0 ? ((fullName += lastName.chr1), ++sumChr) : {};
Number(lastName.chr2) != 0 ? ((fullName += lastName.chr2), ++sumChr) : {};
Number(lastName.chr3) != 0 ? ((fullName += lastName.chr3), ++sumChr) : {};
Number(lastName.chr4) != 0 ? ((fullName += lastName.chr4), ++sumChr) : {};
Number(lastName.chr5) != 0 ? ((fullName += lastName.chr5), ++sumChr) : {};
Number(lastName.chr6) != 0 ? ((fullName += lastName.chr6), ++sumChr) : {};
Number(lastName.chr7) != 0 ? ((fullName += lastName.chr7), ++sumChr) : {};
Number(lastName.chr8) != 0 ? ((fullName += lastName.chr8), ++sumChr) : {};
Number(lastName.chr9) != 0 ? ((fullName += lastName.chr9), ++sumChr) : {};
Number(lastName.chr10) != 0 ? ((fullName += lastName.chr10), ++sumChr) : {};

yr2 = ((yrBirth - (yrBirth % 100)) / 100) % 10;
yr1 = ((yrBirth - (yrBirth % 100)) / 100 - yr2) / 10;
yr4 = (yrBirth % 100) % 10;
yr3 = ((yrBirth % 100) - yr4) / 10;

yrSum = yr1 + yr2 + yr3 + yr4;

yrLeft = yr1 * 10 + yr2;
yrRight = yr3 * 10 + yr4;

subtract = yrRight - yrLeft;

isHigherThan = ddBirth > sumChr;

reminder = subtract % yrSum;

iAmThe += !(isHigherThan && reminder < 3) ? "light!" : "lightless!";

console.log(
  `Day: ${ddBirth}
Name: ${fullName}
#letters: ${sumChr}
${yrRight} - ${yrLeft} = ${subtract}
${yr1} + ${yr2} + ${yr3} + ${yr4} = ${yrSum}
Is ${ddBirth} higher than ${sumChr}? ${isHigherThan}
${subtract} % ${yrSum} = ${reminder}
${iAmThe}`
);
