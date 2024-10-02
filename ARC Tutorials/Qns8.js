let a = ["1", "1", "2", "3", "3", "1", "100"];

// 1. Using Set
const findUniqueWithSet = (arr) => {
  return [...new Set(arr)];
};

console.log("Using Set:", findUniqueWithSet(a));
// Output: ["1", "2", "3", "100"]


// 2. Using filter and indexOf
const findUniqueWithFilter = (arr) => {
  return arr.filter((ele, index) => arr.indexOf(ele) === index);
};

console.log("Using filter & indexOf:", findUniqueWithFilter(a));
// Output: ["1", "2", "3", "100"]


// 3. Using reduce
const findUniqueWithReduce = (arr) => {
  return arr.reduce((acc, ele) => {
    if (!acc.includes(ele)) {
      acc.push(ele);
    }
    return acc;
  }, []);
};

console.log("Using reduce:", findUniqueWithReduce(a));
// Output: ["1", "2", "3", "100"]


// 4. Using a Map to count occurrences
const findUniqueWithMap = (arr) => {
  const countMap = new Map();
  arr.forEach(ele => {
    countMap.set(ele, (countMap.get(ele) || 0) + 1);
  });
  
  return [...countMap.keys()];
};

console.log("Using Map:", findUniqueWithMap(a));
// Output: ["1", "2", "3", "100"]


// 5. Using a for loop (manual)
const findUniqueWithLoop = (arr) => {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
};

console.log("Using for loop:", findUniqueWithLoop(a));
// Output: ["1", "2", "3", "100"]
