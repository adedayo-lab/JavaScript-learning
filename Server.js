// creating a server with Javascript for the first time
const http = require('http');
const hostname = '127.0.0.1';
const port = 8220;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World, this is my first javaScript Server.\n');
});

server.listen(port, hostname, () => {
    console.log(`Server is active and running at http://${hostname}:${port}/`);
});


