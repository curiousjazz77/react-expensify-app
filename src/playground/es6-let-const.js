//we won't be using var - issues with it
var nameVar = 'Andrew';
var nameVar = 'Idrin';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);


const nameConst = 'Juno';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Idrin Elba';
let firstName;

//parse for last name
if (fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName)