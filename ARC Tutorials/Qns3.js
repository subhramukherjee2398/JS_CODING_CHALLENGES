

//How to find duplicate elements in a given array?

let A = [91, 10, 56, 41, 10, 5, 5, 98, 5];

const findDuplicate = (data) => {
  const duplicates = [];
  data.forEach((ele, index, arr) => {
    // Check if the element has appeared before in the array
    if (arr.indexOf(ele) !== index && !duplicates.includes(ele)) {
      duplicates.push(ele); // Add to duplicates if it's not already included
    }
  });
  return duplicates;
};

console.log(findDuplicate(A)); // Outputs the duplicates

let A = [91, 10, 56, 41, 10, 5, 5, 98, 5];

// 1. Using a Set to keep track of seen elements
const findDuplicateWithSet = (data) => {
  const seen = new Set();
  const duplicates = new Set();
  
  data.forEach(ele => {
    if (seen.has(ele)) {
      duplicates.add(ele);
    } else {
      seen.add(ele);
    }
  });
  
  return [...duplicates]; // Convert the Set back to an array
};

console.log(findDuplicateWithSet(A)); // Outputs: [10, 5]


// 2. Using an object to count occurrences
const findDuplicateWithCount = (data) => {
  const count = {};
  const duplicates = [];

  data.forEach(ele => {
    count[ele] = (count[ele] || 0) + 1;
  });

  for (let key in count) {
    if (count[key] > 1) {
      duplicates.push(Number(key));
    }
  }

  return duplicates;
};

console.log(findDuplicateWithCount(A)); // Outputs: [10, 5]


// 3. Using filter and indexOf
const findDuplicateWithFilter = (data) => {
  return data.filter((ele, index, arr) => arr.indexOf(ele) !== index && arr.lastIndexOf(ele) === index);
};

console.log(findDuplicateWithFilter(A)); // Outputs: [10, 5]


// 4. Using reduce
const findDuplicateWithReduce = (data) => {
  const count = {};
  return data.reduce((acc, ele) => {
    count[ele] = (count[ele] || 0) + 1;
    if (count[ele] === 2) {
      acc.push(ele);
    }
    return acc;
  }, []);
};

console.log(findDuplicateWithReduce(A)); // Outputs: [10, 5]


// 5. Using filter with a Set
const findDuplicateWithSetAndFilter = (data) => {
  const seen = new Set();
  return data.filter(ele => {
    if (seen.has(ele)) {
      return true;
    } else {
      seen.add(ele);
      return false;
    }
  });
};

console.log(findDuplicateWithSetAndFilter(A)); // Outputs: [10, 5, 5]
