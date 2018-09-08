'use strict';

console.log('App.js is running!');

//JSX - Javascript XML extension provided to us by react, not native to javascript
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
