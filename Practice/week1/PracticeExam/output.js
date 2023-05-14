console.log("1");
setImmediate(()=>{console.log("2")});
process.nextTick(()=>{console.log("3")});

const callMe=()=>{
    return new Promise((resolve, reject) => {
        console.log("4");
        setTimeout(()=>{console.log("5")},10);
        resolve("6");
        console.log("7")
    })
};
console.log("8");
callMe().then(console.log);
process.nextTick(()=>{console.log("9")});
console.log("10")

