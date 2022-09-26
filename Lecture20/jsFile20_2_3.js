// id attribute can be of +/- number!
async function createTable(id) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  let data = await response.json();

  const dat = Object.entries(data); // Converts objects into array!
  len = dat.length;
  datLen = (len + id - 1) % len; // Calculate starting post depending on array.length!

  table = "<tr><th>userId</th><th>id</th><th>title</th><th>body</th></tr>";
  for (i = datLen; i < datLen + 10; i++) {
    table += `<tr><td>${dat[i][1].userId}</td><td>${dat[i][1].id}</td><td>${dat[i][1].title}</td><td>${dat[i][1].body}</td></tr>`;
  }
  document.getElementById("table").innerHTML = table;
}

// USE TEST BUTTON to manipulate displaying posts!
function test() {
  id = prompt("Enter +/- number:") * 1;
  createTable(id);
}
