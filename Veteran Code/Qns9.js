/* how to find vowels from string in javascript */

const countvowel = (str) => {
  let v = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (v.includes(letter)) {
      count++;
    }
  }
  return count;
};

console.log(countvowel("aaaammmm"));

// my solution :
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