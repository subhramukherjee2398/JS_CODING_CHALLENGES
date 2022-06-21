

/* how to merged two arrays in javascript */


const a1 = [ 4 , 5 , 6 , 7 ]

const a2 = [ 2 , 8 , 10 , 0 ]

//concat;

const farr = a1.concat(a2)

console.log(farr);

//sorting

const sorted = farr.sort((a,b)=>{
    return a-b;
})

console.log(sorted)

//spread

const res = [...a1,...a2]

console.log(res)