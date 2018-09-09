const square = function (x){
  return x * x
};

//anonymous function - arrow function
//like lambdas, more concise functions
// const squareArrow = (x) => {
//     return x * x
//     };


const squareArrow = (x) => x * x;

const fullName = 'Idrin Elba';
const getFirstArrow = (name) => name.split(' ')[0];;

console.log(square(8));
console.log(squareArrow(4));
console.log(getFirstArrow(fullName));