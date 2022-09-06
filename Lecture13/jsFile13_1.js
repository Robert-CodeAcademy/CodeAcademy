library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  { author: "Suzanne Collins", title: "Mockingjay", libraryID: 3245 },
];

library.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0)); //Sorts array by title!

byAuthor = library.map((x) => x.author); //Creates author elements array!

//Function extracts titles by its ID!
function byLibraryIDbooksExtractor(library) {
  books = library.filter((x) => x.libraryID == 1254).map((x) => x.title);
  return books;
}

console.log(library);
console.log(byAuthor);
console.log(byLibraryIDbooksExtractor(library));
