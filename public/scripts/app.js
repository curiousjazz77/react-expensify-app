'use strict';

console.log('App.js is running!');

//Create app object title/subtitle


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
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            ' Item one'
        ),
        React.createElement(
            'li',
            null,
            ' Item two'
        )
    )
);

var user = {
    name: 'Idrin',
    age: 27,
    location: 'NY'

    //Dynamic injection
};var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name + '!'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var titleSubtitle = {
    title: 'Hello',
    subtitle: 'my people'
};

var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        titleSubtitle.title + '!'
    ),
    React.createElement(
        'p',
        null,
        titleSubtitle.subtitle
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
