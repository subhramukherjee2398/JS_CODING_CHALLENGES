//Sort a given array of strings?

let String_Arr  = ["JavaFX", "HBase", "OpenCV", "Java", "Hadoop", "Neo4j"]

let sorted_string_arr = String_Arr.sort((a,b)=>{
    return a.localeCompare(b)
})

console.log(sorted_string_arr)