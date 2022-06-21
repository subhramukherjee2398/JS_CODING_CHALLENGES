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
