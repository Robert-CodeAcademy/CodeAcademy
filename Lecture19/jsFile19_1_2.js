user = {
  name: "Robert Avramovski",
  age: 47,
  state: "MACEDONIA\n",
  ageText: function () {
    return this.name + " is age of " + this.age;
  },
  stateText: function () {
    return this.name + "'s native country is " + this.state;
  },
};

function objToArr() {
  let arrOfObj = Object.entries(user);
  console.log(arrOfObj);
  return arrOfObj;
}

function arrToObj(data) {
  return Object.assign({}, data);
}

console.log(user.stateText(), user.ageText()); // Return of methods in user object!
console.log(user); // Initial object, user!
console.log(arrToObj(objToArr())); // To array and reverse of user object!
