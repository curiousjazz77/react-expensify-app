//we won't be using var - issues with it
var nameVar = 'Andrew';
var nameVar = 'Idrin';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);


const nameConst = 'Juno';
console.log('nameConst', nameConst);

function getPetName(){
    var petaName = 'Hal'; //scoped to this function
    return petName;
}

getPetName();
console.log(petName);