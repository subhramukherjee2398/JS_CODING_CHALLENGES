//How can you combine two objects?

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};


let job = {
    jobTitle: 'JavaScript Developer',
    location: 'USA'
};

let employee = {
    ...person,
    ...job
};

console.log(employee);



let person2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};


let job2 = {
    jobTitle: 'JavaScript Developer',
    country: 'USA'
};


let employee2 = Object.assign(person, job);
console.log(employee);