class OldSyntax {
    constructor(){
        this.name = 'Mike';
    }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax {
    name = 'Jen'; //done without needing constructor
}
const newSyntax = new NewSyntax();
console.log(newSyntax);