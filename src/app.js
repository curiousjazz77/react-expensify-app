
//React components extend react and have to be title case
//Component state allows us to manage objects. Components re-render with updates

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options: [] //['Thing one', 'Thing two', 'Thing four'] //default options
        };
    }
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0}/>
                <Options options={this.state.options} />
                <AddOption/>
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

class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick} disabled={!this.props.hasOptions} >

                    What should I do?
                </button>
            </div>
        )
    }
}

//Options component

class Options extends React.Component {
    constructor(props){
        super(props); //bare minimum if u want to override constructor behavior
        this.handleRemoveAll = this.handleRemoveAll.bind(this); //run once and not rebound over and over

    }

    handleRemoveAll() {
        console.log(this.props.options)
        // alert('handleRemove');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll.bind(this)}>Remove all</button>
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

class AddOption extends React.Component {
    handleActionOption(e) {

        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleActionOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));