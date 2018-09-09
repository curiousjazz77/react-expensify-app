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
  renderApp();
  console.log("form submitted")
};

const onRemoveAll = () => {
    app.options = []
    renderApp();
    console.log('remove');
};

const onMakeDecision = () => {
 const randomNum = Math.floor(Math.random() * app.options.length);
 const option = app.options[randomNum];
 alert(option);
 console.log(randomNum);
};

const appRoot = document.getElementById('app');

//JSX - Javascript XML extension provided to us by react, not native to javascript
const renderApp = () => {
    const template = (
        <div>
            <h1>{(app.title) ? app.title + '!' : 'Null'}</h1>
            {(app.subtitle) ? <p>{app.subtitle}</p> : 'Null'}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length ===0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option} </li>)
                }

            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};
renderApp();



