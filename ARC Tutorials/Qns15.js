//How to check if an array contains any element of another array?

let a = [ 1 , 2 , 3 , 4 , 5]

let a1 = [5 , 6 , 7]

let ele = a1.some((ele)=>{
    return a.includes(ele)
})

console.log(ele)