function twoSum(arr,target){
    let map =  {};
    let list = [];

    for(let i = 0; i<arr.length;i++){
        let test = target - arr[i];
        if(map[arr[i]] != undefined){
            list.push([map[arr[i]],i]);
        }else{
            map[test] = i;
        }
    }
    return list;
}

let arr = [2,5,7,11,15,4];
let target = 9;

console.log(twoSum(arr,target))