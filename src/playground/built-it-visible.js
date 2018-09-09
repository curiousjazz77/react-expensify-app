
const app = {
    title: 'Visibility Toggle',
    subtitle: 'Put your choices in the hands of a computer',
    options: []
};

let buttonWording = 'Show details';
let clickResult = '';

const switchDetails = () => {
    clickResult = 'Hey. These are some details you can see now!';
buttonWording = 'Hide details';
    renderApp();
};

let visibility =false; 

//JSX - Javascript XML extension provided to us by react, not native to javascript
const renderApp = () => {
    const template = (
        <div>
            <h1>{(app.title) ? app.title + '!' : 'Null'}</h1>
            <button onClick={switchDetails}>{buttonWording}</button>
            <p>{(clickResult)? 'Hey. These are some details you can see now!' : ''}</p>
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
};
renderApp();