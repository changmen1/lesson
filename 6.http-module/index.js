const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.end(JSON.stringify({
    //     data: 'Hello Nodejs!',
    // }));
    res.end('你好');
})
server.listen(3000);