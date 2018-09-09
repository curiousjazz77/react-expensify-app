console.log('App.js is running!');


const app = {
    title: 'Indecision app',
    subtitle: 'Put your choices in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option){
      app.options.push(option);
      e.target.elements.option.value = '';
  }
  renderCounterApp();
  console.log("form submitted")
};

const appRoot = document.getElementById('app');

//JSX - Javascript XML extension provided to us by react, not native to javascript
const renderCounterApp = () => {
    const template = (
        <div>
            <h1>{(app.title) ? app.title + '!' : 'Null'}</h1>
            {(app.subtitle) ? <p>{app.subtitle}</p> : 'Null'}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};
renderCounterApp();



