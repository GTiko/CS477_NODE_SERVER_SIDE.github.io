function testUtil() {
  const myutil = require("./myutil");

  let res = myutil.convertDate("2023", 12, 24);
  console.log(res); //printed: 2023-12-24
}

testUtil()

function testBuffer(){
    const increaseOne = require('./mybuffer');
    const ret = increaseOne('123');
    console.log(ret);// printed: 234
}

testBuffer();

function testFileSync(){
    const File = require('./file');
    const fileName = 'sync.txt';
    const content = 'hello world';
    File.saveFileSync(fileName, content);// file sync.txt with the conntent should be saved in the directory 'data'
    const ret = File.readFileSync(fileName);// read the above file
    // console.log(ret)
    console.log(ret === content); //printed: true
}

testFileSync();

async function testFileAsync(){
    const File = require('./file');
    const fileName = 'async.txt';
    const content = 'hello world'
    await File.saveFile(fileName, content);// file sync.txt with the conntent should be saved in the directory 'data'
    const ret = await File.readFileSync(fileName);//read the above file
    console.log(ret === content); //printed: true
}
testFileAsync();