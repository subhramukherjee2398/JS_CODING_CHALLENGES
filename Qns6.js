/* How to find the sum of all elements in a given array */

const arr = [1, 2, 3, 4, 6, 7 , 9, 10];

function sum(arr){
  return arr.reduce((curr,acc)=>{
    return curr + acc
  })
}

console.log(sum(arr))