console.log('App.js is running!');

const user = {
    name: 'Idrin',
    age: 23,
    location: 'Cincinnati'
}

function getLocation(location){
    if (location){
        return <p>Location: {location}</p>;
    }
}

//Dynamic injection
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const app = {
    title: 'Indecision app',
    subtitle: 'Put your choices in the hands of a computer',
    options: ['One', 'Two']
}

//JSX - Javascript XML extension provided to us by react, not native to javascript
const template = (
    <div>
        <h1>{(app.title) ? app.title+ '!': 'Null'}</h1>
        {(app.subtitle) ? <p>{app.subtitle}</p> : 'Null'}
        <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const templateThree = (
    <div>
        <h1>{(app.title) ? app.title+ '!': 'Null'}</h1>
        <p>{(app.subtitle) ? app.subtitle : 'Null'}</p>
    </div>
);

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);