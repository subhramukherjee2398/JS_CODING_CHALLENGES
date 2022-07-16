//How to find unique values in an array?

let a = ["1", "1", "2", "3", "3", "1" , "100"];

let unique = a.filter((ele,index,arr)=>{
    return arr.indexOf(ele) == index
})

console.log(unique)

b = [... new Set(a)];

console.log(b)