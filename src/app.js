//install (yarn add validator@8.0.0) ->import ->use
// we grab the default export from validator library
//google npm validator
// yarn add react@16.0.0 react-dom@16.0.0
//must teach webpack to use babel before using jsx - so babel loader comes in handy for this.

import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Option from './components/Option';

//React components extend react and have to be title case
//Component state allows us to manage objects. Components re-render with updates
//We are using 4 stateless components, making the application slightly faster and easier to work with

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: [] //default options
        };
    }
    /*only accessible in class based components
    * no way to access lifecycle in stateless functional components*/
    componentDidMount(){ //called internally on react side so get spelling right

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({options}))
            }
        }
        catch (e){
            //if things go wrong - Do nothing at all is json data invalid. we fall back to previous array
        }

    }

    /*fires up after state values or prop values change
    * comes in handy when you need to figure out when
    * your component has changed
    * Saves to local storage each time
    * Use localStorage.getItem('options') to retrieve from console*/
    componentDidUpdate(prevProps, prevState){ //called internally on react side so get spelling right
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify((this.state.options));
            localStorage.setItem('options', json)
            console.log('saving data')
        }
    }

    /*we won't see this used in our app like the other method
    * for instance, you can see how it works in the console
    * Use this to replace app with this paragraph tag:
    * ReactDOM.render(React.createElement('p'), document.getElementById('app'));
    * Then, component will unmount fires.
    * */
    componentWillUnmount(){
        console.log('component will unmount!')
    }

    /*localStorage: only works with string data...not objects and arrays. SO we can use JSON!!
    // localStorage.setItem('name', 'And');
    // undefined
    // localStorage.getItem('name');
    // "And"

    const json = JSON.stringify({age: 26})
    JSON.parse(json)
    JSON.parse(json).age
    >Object {age: 26}
    26
    */

    //It's valid for a parent to pass down new prop values, but props is read only in the options component
    //THis is why wiping the array causes all the options to go away
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    //Look at Mozilla developer network to look at array concatenation
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {

        if (!option) {
            return 'Enter valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';

        }
        //equivalent to an else clause
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));


    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}


//Stateless functional component
//sped up because it doesn't have to manage lifecycle
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision App'
}

//converting Action to stateless component from class based stateful one
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));