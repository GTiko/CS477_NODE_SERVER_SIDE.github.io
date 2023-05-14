function twoSum(arr,target){
    let obj = {};
    let list = [];
    for(let i=0;i < arr.length; i++){
        let elem1 = arr[i];
        let elem2 = target - elem1;

        if(obj[elem1] != undefined){
            list.push([obj[elem1],i])
        }else{
            obj[elem2] = i;
        }
    }
    return list;
}
let arr = [4,2,7,3,5,11,15,6];

console.log(twoSum(arr,9))
