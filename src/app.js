console.log('App.js is running!');

//Create app object title/subtitle



//JSX - Javascript XML extension provided to us by react, not native to javascript
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li> Item one</li>
            <li> Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Idrin',
    age: 27,
    location: 'NY'
}

//Dynamic injection
var templateTwo = (
    <div>
        <h1>{user.name + '!'}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var titleSubtitle = {
    title: 'Hello',
    subtitle: 'my people'
}

var templateThree = (
    <div>
        <h1>{titleSubtitle.title+ '!'}</h1>
        <p>{titleSubtitle.subtitle}</p>
    </div>
);

var appRoot = document.getElementById('app')

ReactDOM.render(templateThree, appRoot);