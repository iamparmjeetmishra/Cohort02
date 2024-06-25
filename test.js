function getPort(url) {
  const { port } = new URL(url);

  if(port === '80') {
    console.log("You're using the default port");
  }

  if(port === '443') {
    console.log("You're using the default secure port");
  }

  console.log(`You are running on port "${port}"`);
}

getPort(`http://example.com:80`)
getPort(`http://example.com:8080`)
getPort(`https://example.com:443`)
getPort(`https://example.com:3000`)