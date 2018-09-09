const square = function (x){
  return x * x
};

//anonymous function - arrow function
//like lambdas, more concise functions
// const squareArrow = (x) => {
//     return x * x
//     };


const squareArrow = (x) => x * x;

const getFirstName = (fullName) => fullName.split(' ')[0];;

console.log(square(8));
console.log(squareArrow(4));
console.log(getFirstName('Idrin Elba'));