console.log('person.js is running');
//these are named exports
const isAdult = (age) =>  age >= 18 ;
const canDrink = (age) =>  age >= 21;


// export {name: 'Andrew'}'' WRONG

export {isAdult, canDrink}