/*Making website that sells cars
Each car has a make, model, and vin
We also want to have a getDescription()
 */

class Person {
    //data to be passed in
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        // return 'Hi. I am '+ this.name + '!';
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if (this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const traveler = new Traveler('Idrin ELba', 27, 'Dakar, Senegal');
console.log(traveler.getGreeting());

const traveler_two = new Traveler('Maritsa Ogunle', 19);
console.log(traveler_two.getGreeting());


const student = new Student('Idrin ELba', 27, 'Computer Science');
console.log(student.hasMajor());
console.log(student.getDescription());


const me = new Person('Idrin ELba', 27);
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());


const other = new Person();
console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());