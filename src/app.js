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
const minusOne = () => {
    console.log('minusOne');
};

const reset = () => {
    console.log('reset');
};
//needs to be called className instead of class in JSX
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <p></p>
        <button onClick={minusOne}>-1</button>
        <p></p>
        <button onClick={reset}>0</button>
    </div>
);

console.log(templateTwo);
const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot);