//React components extend react and have to be title case
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
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
    handlePick(){
        alert('handlePick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

//Options component

class Options extends React.Component {
    handleRemove(){
        alert('handleRemove');
    }
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
                <button onClick={this.handleRemove}>Remove all</button>
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

    render() {
        return (
            <div>
               AddOption component here here
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));