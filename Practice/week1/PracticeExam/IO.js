console.log("first");
process.nextTick(()=>{console.log("next tick 2")});
setImmediate(()=>{console.log("setImindet 3")});
setTimeout(()=>{console.log("time 1")},0);
process.nextTick(()=>{console.log("next tick 4")});
console.log("end")
