// function foo() {
//   console.log("foo");
// }
// setTimeout(()=>console.log("first"),9.29)
// setImmediate(()=>console.log("second"))
// process.nextTick(foo);
// console.log("bar");


setTimeout(() => { console.log('timeout'); }, 0);
setImmediate(() => { console.log('immediate'); });
process.nextTick(()=> console.log('nexttick'));