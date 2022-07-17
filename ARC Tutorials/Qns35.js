//How can you add an element to an object?

let p = {
    name : 'Subhra',
    class : 6
}

// without modify originial

new_obj  = Object.assign({},p,{roll : 23})

console.log(new_obj)

// modifying original

p.sec = "A";

console.log(p)