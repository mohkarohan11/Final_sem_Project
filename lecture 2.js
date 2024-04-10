// // DAY 3 of Node js
// // http server

const http = require('http');

const server = http.createServer((req, response) => { 
    // response.write('<h1>hello world</h1>')
    // response.end('world');
//response.writeHead(200,{'Content-Type': 'text/plain'})
    console.log(req.url)
    let url = req.url
    if (url == '/Admin') {
        response.end('hello admin')
    }
    else if (url == '/users') {
        response.end('Hello chai pelo')
    }
    else {
        response.end('Hello world')
    }

})

server.listen(5000, () => {
    console.log('port started on 5000 ');
})

