//Write a function to check if a given string is Palindrome or not?

function check(s1){
  let z = s1.split("").reverse().join("")
  console.log(z)
   return s1 === z ? true : false
}

let a = "abbak"

console.log(check(a));