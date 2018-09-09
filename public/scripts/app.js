'use strict';

var app = {
    title: 'Visibility Toggle',
    subtitle: 'Put your choices in the hands of a computer',
    options: []
};

var buttonWording = 'Show details';
var clickResult = '';

var switchDetails = function switchDetails() {
    clickResult = 'Hey. These are some details you can see now!';
    buttonWording = 'Hide details';
    renderApp();
};

var visibility = false;

//JSX - Javascript XML extension provided to us by react, not native to javascript
var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title ? app.title + '!' : 'Null'
        ),
        React.createElement(
            'button',
            { onClick: switchDetails },
            buttonWording
        ),
        React.createElement(
            'p',
            null,
            clickResult ? 'Hey. These are some details you can see now!' : ''
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};
renderApp();
