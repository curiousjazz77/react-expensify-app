console.log('person.js is running');
//these are named exports
const isAdult = (x) =>  x >= 18 ;
const canDrink = (x) =>  x >= 21;


// export {name: 'Andrew'}'' WRONG

export {isAdult, canDrink}