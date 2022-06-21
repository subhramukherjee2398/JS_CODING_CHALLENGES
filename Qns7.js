

/*  How to find fictorial of a given number in javascript */



const fact = (n) =>{
    let f = 1
 for(let i = 1 ; i<=n ; i++){
    f = f*i
 }
 return f;
}

console.log(fact(4))