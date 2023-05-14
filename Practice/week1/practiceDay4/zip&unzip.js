let fs =  require("fs");
let zlib = require("zlib");

let zipG = zlib.createGzip();

const readable = fs.createReadStream("./txt.zip");
const writable = fs.createWriteStream("./txt.txt");

readable.pipe(zipG).pipe(writable)