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
    age: 23,
    //location: 'NY'
}

function getLocation(location){
    if (location){
        return <p>Location: {location}</p>;
    }
}

//Dynamic injection
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var titleSubtitle = {
    title: 'Indecision app',
    subtitle: 'Put your choices in the hands of a computer'
}

var templateThree = (
    <div>
        <h1>{titleSubtitle.title+ '!'}</h1>
        <p>{titleSubtitle.subtitle}</p>
    </div>
);

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot);