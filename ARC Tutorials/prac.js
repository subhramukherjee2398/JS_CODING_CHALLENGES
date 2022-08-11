

function check(s){
    let a = ["a", "e", "i", "o", "u"]
    let x = s.split("")
    let letters = []
 //   console.log(x)
    x.map((ele)=>{
        if(a.includes(ele)){
          //  console.log(ele)
            letters.push(ele)
        }
    })
    console.log(letters)
}

check("aaaajkkkkol")