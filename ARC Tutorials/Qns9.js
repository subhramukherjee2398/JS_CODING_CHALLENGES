//How to find unique values from an Array in sorted order?

let a = ["99", "3", "1" , "100" , "1", "1", "2","100"];

let new_arr = a.filter((e,i,arr)=>{
    return arr.indexOf(e) == i
}).sort((a,b)=>{
    return a-b
})

console.log(new_arr)