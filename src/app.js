//React components extend react and have to be title case
//Component state allows us to manage objects. Components re-render with updates

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing four'] //default options
        };
    }

    //It's valid for a parent to pass down new prop values, but props is read only in the options component
    //THis is why wiping the array causes all the options to go away
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
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
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }

    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
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

//lets someone know when they hit the button
// class Action extends React.Component {
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
//
//                     What should I do?
//                 </button>
//             </div>
//         )
//     }
// }

//Options component

class Options extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}

//AddOption Component
//doesn't make sense for this behavior to live in the parent
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) { //first handle add option passed in from this component
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        //we will use component state starting here
        this.setState(() => {
            return {error};
        });
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}

//stateless functional component; faster that stateful ones
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));