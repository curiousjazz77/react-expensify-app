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
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

//Options component

class Options extends React.Component {
    render() {
        return (
            <div>
                Options component here
                <p>{this.props.options.length}</p>
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Option component here</p>
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