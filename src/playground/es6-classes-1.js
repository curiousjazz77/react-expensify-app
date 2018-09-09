/*Making website that sells cars
Each car has a make, model, and vin
We also want to have a getDescription()
 */

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        // return 'Hi. I am '+ this.name + '!';
        return `Hi. I am ${this.name} !`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

const me = new Person('Idrin ELba');
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());


const other = new Person();
console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());