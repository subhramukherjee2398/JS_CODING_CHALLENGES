
/*  How To find max/min in a given array in javascript */

const nums = [ 99 , 70 , 5 , 200 , 111]

const Max = (array) =>{
 
    return array.reduce((prev,curr)=>{
        //console.log(prev,curr)
       return prev>curr ? prev : curr
    })

} 

console.log(Max(nums))

