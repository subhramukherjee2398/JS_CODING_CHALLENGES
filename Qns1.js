/* How To find duplicate elements in array in javascript */

const arr = [10, 20, 10, 40, 60, 20];

const duplicates = arr.filter((ele, index, arr) => {
  //console.log(ele,index,arr.indexOf(ele))
  return arr.indexOf(ele) !== index;
});

console.log(duplicates);
