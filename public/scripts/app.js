'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision app',
    subtitle: 'Put your choices in the hands of a computer',
    options: ['One', 'Two']

    //JSX - Javascript XML extension provided to us by react, not native to javascript
};var template = React.createElement(
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
    )
);

var count = 0;
//JSX doesn't have built in data binding
var addOne = function addOne() {
    count++;
    renderCounterApp();
    console.log('addOne', count);
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
    console.log('minusOne');
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
    console.log('reset');
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    //needs to be called className instead of class in JSX
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            '0'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
