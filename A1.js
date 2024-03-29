// Section 3, Assignment 1
//

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello</title></head>');
        res.write('<body><form action="/create-user" method="post"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url==='/users') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>January 2023</title></html>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
    }
    if (url === '/create-user') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end()
    }

});

server.listen(3000);

