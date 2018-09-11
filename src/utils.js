console.log('utils.js is running');
//these are named exports
const square = (x) =>  x * x;
const add = (a, b) =>  a + b;
const subtract = (a, b) =>  a - b;

// export {name: 'Andrew'}'' WRONG


export {square, add, subtract as default}