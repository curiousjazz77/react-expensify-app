//install (yarn add validator@8.0.0) ->import ->use
// we grab the default export from validator library
//google npm validator
// yarn add react@16.0.0 react-dom@16.0.0
//must teach webpack to use babel before using jsx - so babel loader comes in handy for this.

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
//here we are in charge of only bootstrapping things that live elsewhere
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

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