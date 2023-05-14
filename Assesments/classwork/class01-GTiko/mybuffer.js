//Create your module here using Buffer module

function increaseOne(item) {
  const buf = Buffer.from(item);
    for (let i = 0; i < buf.length; i++) {
        buf[i]++;
    }
    return buf.toString();
}

module.exports = increaseOne;

