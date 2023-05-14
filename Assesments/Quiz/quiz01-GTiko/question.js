/**
Create a function findMatching() that accepts 
two arrays of numbers of different sizes. 
The function returns an array of numbers that exist in both arrays. 
Keep in mind that the returned array should not contain duplicates. 

Example: 

const arr1 = [1, 2, 3, 4, 4, 5] 

const arr2 = [3, 4, 5] 

findMatching(arr1, arr2) // returns [ 3, 4, 5 ] 

*/
/**
 * Your Name: Gemechu Tiko
 */

// Your answer here
function findMatching(arr1, arr2){
    let list = [];
    for(let each of arr1){
        for(let all of arr2){
            if(each == all){
                if(list.includes(each)){
                    continue;
                }else{   
                list.push(each)
                }
            }
        }
    }
    return list;
}

const arr1 = [1, 2, 3, 4, 4, 5] 

const arr2 = [3, 4, 5] 

console.log(findMatching(arr1, arr2)) // returns [ 3, 4, 5 ] 
