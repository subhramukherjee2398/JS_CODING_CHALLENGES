//How to check if an object is present in an Array or not?

const arr = [{ id: 1, username: 'fred' }, { id: 2, username: 'bill' }, { id: 3, username: 'ted' }];

function add(arr, name) {
 
    const found = arr.some(el => el.username === name);
    return found;
    
}

console.log(add(arr, 'ted'));