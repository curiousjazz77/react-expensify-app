//React component syntax and component state
class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props); //bare minimum if u want to override constructor behavior
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            title: 'Show details',
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                    </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey there are some details you can see now!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));