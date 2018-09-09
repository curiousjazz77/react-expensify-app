'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision app',
    subtitle: 'Put your choices in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderApp();
    console.log("form submitted");
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderApp();
    console.log('remove');
};

var appRoot = document.getElementById('app');

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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        [React.createElement(
            'p',
            { key: '1' },
            'a'
        ), React.createElement(
            'p',
            { key: '2' },
            'b'
        ), React.createElement(
            'p',
            { key: '3' },
            'c'
        )],
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
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};
renderApp();
