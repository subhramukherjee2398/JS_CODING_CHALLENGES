//How to find the count of duplicates in an array?

let M = [ "A" , "B" ,"A" , "C" , "B" , "A" ]

let duplicates = M.reduce((obj,m)=>{
    
    if(obj[m] == undefined){
       obj[m] = 1
       return obj
    }
    else{
      obj[m]++
      return obj
    }
    
},{})

console.log(duplicates)

const arr = ['one', 'two', 'one', 'one', 'two', 'three'];

const count = {};

arr.forEach(element => {
  count[element] = (count[element] || 0) + 1;
});

// 👇️ {one: 3, two: 2, three: 1}
console.log(count);