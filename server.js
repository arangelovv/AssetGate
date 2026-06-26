let http = require('http');
let path = require('path');
let fs = require('fs');

const PORT = 4001;

let filePath = process.argv[2];

const server = http.createServer(
     (req, res) => {

        let reqFilePath = req.url;
        console.log('reqFilePath', reqFilePath);
        let fullFilePath = filePath + reqFilePath;
        console.log('full', fullFilePath);
        let extname = path.extname(fullFilePath);
        let contentType = undefined;

        switch(extname) {
            default:
            case '.json':
                contentType = 'application.json';
                break;
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
                contentType = 'image/jpg';
                break;
            case '.wav':
                contentType = 'audio/wav';
                break;
        }

        fs.readFile(filePath, (error, content) => {
            if(error) {
                res.writeHead(500);
                res.end('Sorry, there was an error');
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': contentType});
                res.end(content, 'utf-8');
            }
        });
    }
);

server.listen(PORT, 'localhost', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(filePath);
});