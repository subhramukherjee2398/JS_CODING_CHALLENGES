/* How to Find missing elements in a given Array 1 to 10 */

/* Apporch : 

find max and min from array and iterate a loop with max and min
then test the missing element with indexOf
because if any element missed then indexof return -1

*/

const arr = [1, 2, 3, 4, 6, 7 , 9, 10];

const missing = (arr) => {
  let missedeleArrn = [];
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  for (let i = min; i < max; i++) {
    // console.log(arr.indexOf(i),i)
    if (arr.indexOf(i) < 0) {
      missedeleArrn.push(i);
    }
  }

  return missedeleArrn;
};

console.log(missing(arr));
