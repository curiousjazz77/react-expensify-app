'use strict';

console.log('App.js is running!');

var user = {
    name: 'Idrin',
    age: 23,
    location: 'Cincinnati'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

//Dynamic injection
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

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

var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title ? app.title + '!' : 'Null'
    ),
    React.createElement(
        'p',
        null,
        app.subtitle ? app.subtitle : 'Null'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
