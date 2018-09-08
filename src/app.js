console.log('App.js is running!');

//JSX - Javascript XML extension provided to us by react, not native to javascript
var template = <h1>Indecision App</h1>;
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);