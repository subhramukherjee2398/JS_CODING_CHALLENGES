let M = ["A", "B", "A", "C", "B", "A"];

// 1. Using an object to count occurrences
const countDuplicatesWithObject = (data) => {
  const count = {};
  
  data.forEach(ele => {
    count[ele] = (count[ele] || 0) + 1;
  });

  return count;
};

console.log(countDuplicatesWithObject(M)); 
// Output: { A: 3, B: 2, C: 1 }


// 2. Using a Map
const countDuplicatesWithMap = (data) => {
  const countMap = new Map();
  
  data.forEach(ele => {
    countMap.set(ele, (countMap.get(ele) || 0) + 1);
  });

  return countMap;
};

console.log(countDuplicatesWithMap(M)); 
// Output: Map(3) { 'A' => 3, 'B' => 2, 'C' => 1 }


// 3. Using reduce
const countDuplicatesWithReduce = (data) => {
  return data.reduce((acc, ele) => {
    acc[ele] = (acc[ele] || 0) + 1;
    return acc;
  }, {});
};

console.log(countDuplicatesWithReduce(M)); 
// Output: { A: 3, B: 2, C: 1 }


// 4. Using for...of loop and a Set for unique elements
const countDuplicatesWithSet = (data) => {
  const count = {};
  const uniqueElements = new Set(data);
  
  for (let ele of uniqueElements) {
    count[ele] = data.filter(item => item === ele).length;
  }

  return count;
};

console.log(countDuplicatesWithSet(M)); 
// Output: { A: 3, B: 2, C: 1 }


// 5. Using Array.prototype.reduceRight for reverse iteration
const countDuplicatesWithReduceRight = (data) => {
  return data.reduceRight((acc, ele) => {
    acc[ele] = (acc[ele] || 0) + 1;
    return acc;
  }, {});
};

console.log(countDuplicatesWithReduceRight(M)); 
// Output: { A: 3, B: 2, C: 1 }

