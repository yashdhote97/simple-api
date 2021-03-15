const http = require('http');
const fs=require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const pathName=req.url;
  if(pathName=="/"){
    res.writeHead(200, {"content-type": "text/html"});
    res.end("<h2>Server is running</h2>");
  }
  else if(pathName=="/home"){
    res.writeHead(200, {"content-type": "text/html"});
    res.end("<h2>Home</h2>");
  }
  else if(pathName=="/movie"){
    res.writeHead(200, {"content-type": "text/html"});
    res.end("<h2>Movie</h2>");
  }
  else if(pathName=="/cricket"){
    res.writeHead(200, {"content-type": "text/html"});
    res.end("<h2>Cricket</h2>");
  }
  else if(pathName=="/update"){
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    })
    req.on('end', () => {
      console.log(String(data));
      fs.writeFile('testData.txt', String(data), function (err) {
        if (err) return console.log(err);
        console.log('data is written to testData.txt');
      });
    res.end();
    })
  }
  else{
    res.writeHead(404, {"content-type": "text/html"});
    res.end("<h2>Page not found</h2>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});