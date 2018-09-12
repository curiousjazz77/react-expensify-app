//install (yarn add validator@8.0.0) ->import ->use
// we grab the default export from validator library
//google npm validator
// yarn add react@16.0.0 react-dom@16.0.0
//must teach webpack to use babel before using jsx - so babel loader comes in handy for this.

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

//React components extend react and have to be title case
//Component state allows us to manage objects. Components re-render with updates
//We are using 4 stateless components, making the application slightly faster and easier to work with


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));