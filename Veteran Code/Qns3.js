/*  How To find second Largest value in array  */

/*

1: Find Largest
2: Find IndexOf Largest
3: Delete It from Array using splice()
4: Agin find the largest.

*/

const nums = [99, 70, 5, 200, 111];

function SecondLargest(arr) {
  let index = arr.indexOf(Math.max(...arr));
  arr.splice(index, 1);
  console.log(arr);
  console.log(Math.max(...arr));
}

SecondLargest(nums);

/* function findSecondLargest(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let secondMax = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] != max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
} */