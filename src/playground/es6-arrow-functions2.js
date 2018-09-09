//arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments)
    return a + b;
};

const addArrow = (a, b) => {
    //console.log(arguments) //Uncaught ReferenceError: arguments is not defined
    return a + b;
};

console.log(add(55, 1));
console.log(addArrow(20, 1));


// this keyword - no longer bound
const user = {
    name: 'Idrin',
    cities: ['Philadelphia', 'Chicago', 'Cincinnati'],
    printPlacesLives() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLives());

//Challenge

const multiplier = {
    numbers : [3, 4, 5],
    multiplyNumbers() {
        let multiplier = 2;
        return this.numbers.map((number) => number * multiplier);
    }


};

console.log(multiplier.multiplyNumbers());