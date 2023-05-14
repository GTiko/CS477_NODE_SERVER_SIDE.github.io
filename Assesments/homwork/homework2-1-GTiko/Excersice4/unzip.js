const fs = require('fs');
const zlib = require('zlib');

const zipFilePath = 'destination.txt.zip';

const outputFolder = './unzipped/';

const readStream = fs.createReadStream(zipFilePath);

const gunzipStream = zlib.createGunzip();

const writeStream = fs.createWriteStream(outputFolder);

readStream.pipe(gunzipStream).pipe(writeStream);
writeStream.on('finish', () => {
  console.log('Unzipped file successfully!');
});
