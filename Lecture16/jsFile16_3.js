const url = new URL("https://www.youtube.com/watch?v=_7rT-ixivWU");

alert(
  `hash: ${url.hash}\nhost: ${url.host}\nhostname: ${url.hostname}\nhref: ${url.href}\norigin: ${url.origin}\npathname: ${url.pathname}\nport: ${url.port}\nprotocol: ${url.protocol}\nsearch: ${url.search}`
);

location.href = "https://www.youtube.com/watch?v=_7rT-ixivWU";
