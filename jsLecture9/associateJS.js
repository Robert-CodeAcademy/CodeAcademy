let firstName = "Robert", // Define variable name and value!
  age = 48,
  jobTitle = "1st Line Support",
  gender = "Male",
  liveInSkopje = true,
  objectVar = { // Define object type variable, copying values!
    firstName: firstName,
    age: age,
    jobTitle: jobTitle,
    gender: gender,
    liveInSkopje: liveInSkopje,
  };

console.log(objectVar); // Outputs object variable values to the web console!

document.getElementById("btn").onclick = function () { //onClick id "btn" calls function "alertFnctn"!
  alertFnctn();
};

function alertFnctn() { // Function alerts variable values!
  alert(
    "Name: " +
      firstName +
      "\nAge: " +
      age +
      "\nJob Title: " +
      jobTitle +
      "\nGender: " +
      gender +
      "\nLive in Skopje: " +
      liveInSkopje
  );
}
