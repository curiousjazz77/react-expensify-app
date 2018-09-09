const toggleVisibility = () => {
    visibility = !visibility;
    renderApp();
};

let visibility =false;

//JSX - Javascript XML extension provided to us by react, not native to javascript
const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
            {visibility ? 'Hide details' : 'Show details'}
            </button>
            { visibility && (
                <div>
                    <p>Hey. These are some details you can see now!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
};
renderApp();