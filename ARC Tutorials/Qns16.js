//Given two strings, how can you check if the strings are anagram for each other?

let s = "Maryl"
let s1 = "Armys"

function checkAnagramn(str1,str2){
    let a = str1.toLowerCase()
    let b = str2.toLowerCase()

    a = a.split("").sort().join("")
    b = b.split("").sort().join("")

  
    return a===b ? true : false
}

console.log(checkAnagramn(s,s1))