users = [
  { fullName: "Janko Jankovski", age: 18 },
  { fullName: "Petko Petkovski", age: 25 },
  { fullName: "Stanka Stankovska", age: 38 },
];

class Car {
  constructor(brand, year, hp) {
    (this.brand = brand), (this.year = year), (this.hp = hp);
  }

  howOldCar() {
    return new Date().getFullYear() - this.year;
  }

  isAllowed(age) {
    let textVal = age > 25 ? "" : this.hp > 105 ? "NOT " : "";
    return textVal;
  }
}

cars = new Car("BMW", 1974, 110);

console.log(cars.howOldCar() + " yrs old car!");

for (i = 0; i < users.length; i++) {
  console.log(
    users[i].fullName +
      " of " +
      users[i].age +
      " is " +
      cars.isAllowed(users[i].age) +
      "ALLOWED to drive this car!"
  );
}
