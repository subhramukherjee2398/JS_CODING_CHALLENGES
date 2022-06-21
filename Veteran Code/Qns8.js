/* how to find prime number in javascript */

const check = (n) => {
  let r;
  if (n == 1) {
    console.log("Not Prime");
  } else {
    for (let i = 2; i < n; i++) {
      if (n % 2 === 0) {
        r = "Not Prime";
      } else {
        r = "Prime";
      }
    }
  }

  return r;
};

console.log(check(13));
