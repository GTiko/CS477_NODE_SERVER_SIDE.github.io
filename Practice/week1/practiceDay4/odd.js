Array.prototype.odd = async function(){
    let value = await  helper(this);
    console.log(value)
    return value;
}
async function helper(arr){
    let list = [];
    for(let each of arr){
        if(each %2 != 0){
            list.push(each)
        }
    }
    return list;
}

[1,2,3,4,5,6,7,8,9,0].odd()