

/*compare two Arrays are Equal or Not in JavaScript*/
function check(a,b) {
    if(JSON.stringify(a)==JSON.stringify(b)){
        console.log(true)
    }
    else{
        console.log(false)
    }
    
}

let a = [ 1 , 2 , 3] 
let b  = [2 , 3 , 4]
let c = [ 1 , 2 , 3] 

check(a,c)