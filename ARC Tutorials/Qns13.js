//How can you uppercase the first character in a string array?

let String_Arr  = ["javaFX", "hbase", "openCV"]
let update = []
for(let s of String_Arr){
    s = s.charAt(0).toUpperCase() + s.substring(1)
    update.push(s)
    console.log(s)
}
console.log(update)