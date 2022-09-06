// Prompt box function able to return string/number value!

function promptVar(promptText) {
  returnVal = prompt(promptText);
  if (isNaN(returnVal)) {
    returnVal = returnVal.replace("$", "");
  } else {
    returnVal = Number(returnVal);
  }
  return returnVal;
}

num1 = promptVar("Use $ to keep string attr... enter Num1?");
num2 = promptVar("Use $ to keep string attr... enter Num2?");
num3 = promptVar("Use $ to keep string attr... enter Num3?");

console.log(num1 == num2 || num1 == num3 || num2 == num3);
