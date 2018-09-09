'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision app',
    subtitle: 'Put your choices in the hands of a computer',
    options: ['One', 'Two']
};

//JSX - Javascript XML extension provided to us by react, not native to javascript
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title ? app.title + '!' : 'Null'
    ),
    app.subtitle ? React.createElement(
        'p',
        null,
        app.subtitle
    ) : 'Null',
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    ),
    React.createElement(
        'form',
        null,
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add option'
        )
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
