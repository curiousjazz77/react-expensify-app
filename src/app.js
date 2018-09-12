//install (yarn add validator@8.0.0) ->import ->use
// we grab the default export from validator library
//google npm validator
// yarn add react@16.0.0 react-dom@16.0.0
//must teach webpack to use babel before using jsx - so babel loader comes in handy for this.

import React from 'react';
import ReactDOM from 'react-dom';

// const template = React.createElement('p', {}, 'testing 123');
const template = <p>This is JSX from webpack</p>;
ReactDOM.render(template, document.getElementById('app'));