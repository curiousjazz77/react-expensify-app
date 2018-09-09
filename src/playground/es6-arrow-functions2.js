//arguments object - no longer bound with arrow functions

const add = function (a, b){
    console.log(arguments)
    return a + b;
};

const addArrow = (a, b) =>{
    //console.log(arguments) //Uncaught ReferenceError: arguments is not defined
    return a + b;
};

console.log(add(55, 1));
console.log(addArrow(20, 1));


// this keyword - no longer bound
const user = {
    name: 'Idrin',
    cities: ['Philadelphia', 'Chicago', 'Cincinnati'],
    printPlacesLives: function (){
        // console.log(this.name)
        // console.log(this.cities)
        const that = this;

        //Cannot read property 'name' of undefined
        this.cities.forEach(function (city) {
           console.log(that.name + 'has lived in ' + city);
        });
    }
};
user.printPlacesLives();