function abc(a, b) {
  setTimeout(() => {
    for (let i = 0; i < 9e8; i++) {}
    console.log(a + b);
  }, 0);
}
console.log("start");
abc(1, 2);
abc(2, 3);
abc(3, 4);
console.log("end");
