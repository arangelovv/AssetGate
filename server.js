let http = require('http');

const PORT = 4001;

const server = http.createServer(
     (req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('Hello world');
    }
);

server.listen(PORT, 'localhost', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});