const fs = require('fs');
const https = require('https');

const options = {
    key: fs.readFileSync('./privateKey.key'),
    cert: fs.readFileSync('./certificate.crt')
}
const server = https.createServer(options);
server.on('request', (req, res) => {
    // res.write('hello world');
    // res.end();
    const readable = fs.createReadStream('index.html');
    readable.pipe(res);
})

server.listen(8443, () => console.log('listening on 8443...'));