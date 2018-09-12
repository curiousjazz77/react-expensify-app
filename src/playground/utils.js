console.log('utils.js is running');
//these are named exports
export const square = (x) =>  x * x;
export const add = (a, b) =>  a + b;

export default (a, b) =>  a - b;
// export {name: 'Andrew'}'' WRONG


// export {square, add, subtract as default}