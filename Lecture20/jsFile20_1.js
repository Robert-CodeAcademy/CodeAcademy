let getPost = function (getPost) {
  user = {
    title: "My awesome new article",
    body: "This is the text",
  };

  let request = new XMLHttpRequest();

  request.open(getPost, "https://jsonplaceholder.typicode.com/posts/");
  request.setRequestHeader("Content-Type", "application/json");

  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      alert(request.responseText);
    }
  };

  request.send(JSON.stringify(user));
};
