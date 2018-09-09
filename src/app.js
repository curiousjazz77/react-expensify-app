//React components extend react and have to be title case
class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
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
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option component here
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