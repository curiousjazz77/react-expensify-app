/*Making website that sells cars
Each car has a make, model, and vin
We also want to have a getDescription()
 */

class Person {
    constructor(name = 'Anonymous') {
        this.name = name;
    }
    getGreeting(){
        // return 'Hi. I am '+ this.name + '!';
        return `Hi. I am ${this.name} !`;
    }
}

const me = new Person('Idrin ELba');
console.log(me);
console.log(me.getGreeting());


const other = new Person();
console.log(other);
console.log(other.getGreeting());