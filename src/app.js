console.log('App.js is running!');


const app = {
    title: 'Indecision app',
    subtitle: 'Put your choices in the hands of a computer',
    options: ['One', 'Two']
}

//JSX - Javascript XML extension provided to us by react, not native to javascript
const template = (
    <div>
        <h1>{(app.title) ? app.title + '!' : 'Null'}</h1>
        {(app.subtitle) ? <p>{app.subtitle}</p> : 'Null'}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    console.log('addOne');
};
//needs to be called className instead of class in JSX
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={ () => {
            console.log('some value here');
        }}>+1</button>
    </div>
);

console.log(templateTwo);
const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot);