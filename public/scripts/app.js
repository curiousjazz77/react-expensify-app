'use strict';

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
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
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey. These are some details you can see now!'
            )
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};
renderApp();
