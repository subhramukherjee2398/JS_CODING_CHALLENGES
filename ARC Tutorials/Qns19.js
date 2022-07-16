//Given an array of strings, reverse each word in the sentence?

let Str = "My name is Subhra Mukherjee"

function reverseEveryWord(str){
  let a  = (str.split("").reverse().join(""))
  let b = a.split(" ").reverse().join(" ")
  console.log(b)
}

reverseEveryWord(Str)