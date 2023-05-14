async function oddPrinter(list){
    let arr = [];
    for(let each of list){
        if(each % 2 !=0){
            arr.push(each);
        }
    }
    return arr;
  }

  Array.prototype.odd = async function(){
    let value = await oddPrinter(this);
    console.log(value);
    return value;
  }

  console.log(`start`);
  [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].odd();
  console.log(`end`);