//How do you clone an Object?

const food = { beef: '🥩', bacon: '🥓' }


// "Spread"
let n = {...food }


// "Object.assign"
Object.assign({}, food)


// "JSON"
JSON.parse(JSON.stringify(food))

// RESULT:
// { beef: '🥩', bacon: '🥓' }