//Find maximum value in a numbered array?

let arr = [100 , 20 , 1 , 4 , 99 , 40]

let max = arr.reduce((prev,curr)=>{
    return prev > curr ? prev : curr
})

console.log(max)