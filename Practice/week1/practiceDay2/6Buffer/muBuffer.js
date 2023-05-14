function increaseOne(str){
    const buff = Buffer.from(str);
    for(let i=0;i<buff.length;i++){
        buff[i]++
    }
    return buff.toString()
}
module.exports = increaseOne;