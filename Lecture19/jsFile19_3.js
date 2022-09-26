user1 = {
  name: "Robert Avramovski",
  age: 47,
  state: "MACEDONIA",
};

user2 = {
  clnName: "Robert Avramovski",
  clnAge: 47,
  clnState: "MACEDONIA",
};

// Returns are objects have equal values!
function isEqual(object1, object2) {
  return (
    JSON.stringify(Object.values(object1)) == // This section can be replaced with a reusable function!
    JSON.stringify(Object.values(object2))
  );
}

console.log(isEqual(user1, user2));
