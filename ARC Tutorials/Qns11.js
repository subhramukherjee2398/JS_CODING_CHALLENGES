//Find minimum value in a numbered array?

let arr = [100 , 20 , 1 , 4 , 99 , 40]

let min = arr.reduce((prev,curr)=>{
    return prev < curr ? prev : curr
})

console.log(min)