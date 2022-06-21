
/* how to find palindrome in javascript*/


const checkPalindrome = (str) =>{
 
    let strrev = str.split("").reverse().join("")
    if(strrev === str){
        console.log("Palindrome")
    }
    else{
        console.warn("Not");
    }

}

checkPalindrome("madsam")