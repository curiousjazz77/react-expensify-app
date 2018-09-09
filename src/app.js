console.log('App.js is running!');


const app = {
    title: 'Indecision app',
    subtitle: 'Put your choices in the hands of a computer',
    options: ['One', 'Two']
};

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
        <form>
            <input type="text" name="option" />
                <button>Add option</button>
        </form>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
