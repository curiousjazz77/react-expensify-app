console.log('App.js is running!');

//JSX - Javascript XML extension provided to us by react, not native to javascript
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
    </div>
);
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);