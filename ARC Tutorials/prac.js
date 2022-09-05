
var num = [1, 2, 3, 6, 7, 8];

/* say we need to insert 4,5 before 6 in the above array
 * 1. source array - num
 * 2. index to insert - 3
 * 3. remaining are elements to insert
 */
console.log(num.splice(2,2,500,600))
console.log(num)
