//How can you Insert an element at a specific index in an Array?

var num = [1, 2, 3, 6, 7, 8];

/* say we need to insert 4,5 before 6 in the above array
 * 1. source array - num
 * 2. index to insert - 3
 * 3. remaining are elements to insert
 */

function insertAt(array, index, ...elementsArray) {
  array.splice(index, 0, ...elementsArray);  // (kothake theke nebo , kota number bad dbo , kia dd korbo jota khusi)
}

insertAt(num, 3, 4, 5); // [1,2,3,4,5,6,7,8]

/*The splice() method takes three arguments:

start → The index at which to start changing the array.

deleteCount (optional) → An integer that indicates the number of elements in the array to remove from the start.

(elem1, elem2 …) → The elements to add to the array, starting at the beginning. If you do not specify any elements, splice() will only remove elements from the array.*/
