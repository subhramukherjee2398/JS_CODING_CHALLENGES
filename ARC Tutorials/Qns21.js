//How to empty an array?

let arr = [1, 'test', {}, 123.43];

//1
arr = []
//2
arr.length = 0
//3
arr.splice(0, arr.length)