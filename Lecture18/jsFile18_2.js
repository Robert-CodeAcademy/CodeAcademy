let getPost = function (getPost) {
  let request = new XMLHttpRequest();
  uri = "https://jsonplaceholder.typicode.com/posts/";
  uri +=
    getPost == "POST"
      ? "?title=" +
        encodeURIComponent("My awesome new article") +
        "&body=" +
        encodeURIComponent("This is the text")
      : "";
  request.open(getPost, uri);
  request.setRequestHeader("Content-Type", "application/json");
  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      console.log(request.responseText);
      alert("Successful " + getPost + "!");
    }
  };
  request.send();
};
