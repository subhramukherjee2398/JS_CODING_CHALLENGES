//How to find duplicate elements in a given array?


let A = [91,10 , 56 , 41 , 10 , 5 , 5 , 98 , 5];

let dupicates = A.filter((ele,index,arr)=>{
    return (arr.indexOf(ele) !== index)
})

console.log(dupicates)

