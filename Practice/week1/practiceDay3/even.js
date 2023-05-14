async function evenPrinter(list) {
    let arr = [];
    for (let each of list) {
      if (each % 2 == 0) {
        arr.push(each);
      }
    }
    return arr;
  }
  
  Array.prototype.even = async function () {
    let value = await evenPrinter(this);
    console.log(value);
    return value;
  };
  
  [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].even();
  