/* how to find even or odd numbers in array in javascript */

const a = [1, 2, 3, 4, 6, 7, 9, 10];

function check(array) {
  let even = array.filter((item) => item % 2 === 0);
  let old = array.filter((item) => item % 2 !== 0);
  console.log(even);
  console.log(old)
}

check(a);
