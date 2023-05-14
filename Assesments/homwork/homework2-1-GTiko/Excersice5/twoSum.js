function twoSum(arr,target){
    let obj = {};

    for(let i=0;i < arr.length; i++){
        let elem1 = arr[i];
        let elem2 = target - elem1;

        if(obj[elem1] != undefined){
            return [obj[elem1],i]
        }else{
            obj[elem2] = i;
        }
    }
    return [];
}
let list = [2,7,11,15];

console.log(twoSum(list,9))
