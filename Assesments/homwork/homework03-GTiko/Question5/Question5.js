// 5.(Optional)
// Create a function to return an array from two arrays.
// The returned array contains all different elements in both input arrays.
// Input: [1, 2, 3, 4, 4, 5], [3, 4, 5, 6]
// Output: [1,2,3,4,5,6]

function createNewArr(arr1,arr2){
    let newArr = [];

    for(let each of arr1){
        if(newArr.includes(each)){
            continue;
        }else{
            newArr.push(each)
        }
    }
    for(let each of arr2){
        if(newArr.includes(each)){
            continue;
        }else{
            newArr.push(each)
        }
    }
    return newArr;
}
console.log(createNewArr([1, 2, 3, 4, 4, 5], [3, 4, 5, 6]))