console.log('App.js is running!');

const app = {
    title: 'Indecision app',
    subtitle: 'Put your choices in the hands of a computer',
    options: ['One', 'Two']
};

let count = 0;
//JSX doesn't have built in data binding
const addOne = () => {
    count++;
    renderCounterApp();
    console.log('addOne', count);
};
const minusOne = () => {
    count--;
    renderCounterApp();
    console.log('minusOne');
};

const reset = () => {
    count = 0;
    renderCounterApp();
    console.log('reset');
};

const appRoot = document.getElementById('app')

//now has real time data binding
const renderCounterApp = () => {
    //needs to be called className instead of class in JSX
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>0</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();