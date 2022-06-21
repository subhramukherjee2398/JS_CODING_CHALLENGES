

/*how to convert first letter of string in uppercase*/


function convert(str){
  //removing space 
  let s1 = str.split(" ")
  console.log(s1)

  // map it to convert 
  // slice for Hhello remove h
  let s2 = s1.map((it)=>{
    return it.charAt(0).toUpperCase() + it.slice(1)
  })

  console.log(s2)

  // again back it to string.
  console.log(s2.join(" "))
}

convert("hello world")

