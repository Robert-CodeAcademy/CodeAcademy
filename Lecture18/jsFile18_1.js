let getXMLFile = async function (path) {
  response = await fetch(path);
  if (response.status == 200) {
    xmlText = await response.text();
    parser = new DOMParser();
    xml = parser.parseFromString(xmlText, "text/xml");
    SetXMLData(xml);
  } else alert(path + " not exists!");
};

function SetXMLData(xml) {
  console.log(xml);
  const x = xml.getElementsByTagName("CD");
  let table = "<tr><th>Artist</th><th>Title</th></tr>";
  for (i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }

  document.getElementById("demo").innerHTML = table;
}
