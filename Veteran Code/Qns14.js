

/*  How to find factor of a given integer in javascript */

const factor = (n) =>{

    for(let i = 0 ; i<=n; i++){
        if(n%i===0){
            console.log(i+" is factor of "+n)
        }
    }

}

factor(24)