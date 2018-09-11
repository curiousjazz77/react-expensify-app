console.log('utils.js is running');
//there are default exports and named exports
const square = (x) =>  x * x;
const add = (a, b) =>  a + b;

// export {name: 'Andrew'}'' WRONG

export {square, add}