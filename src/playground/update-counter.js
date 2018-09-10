class Counter extends React.Component {

    constructor(props){
        super(props); //bare minimum if u want to override constructor behavior
        this.handleAddOne = this.handleAddOne.bind(this); //run once and not rebound over and over
        this.handleMinusOne = this.handleMinusOne.bind(this); //run once and not rebound over and over
        this.handleReset = this.handleReset.bind(this); //run once and not rebound over and over

    }
    handleAddOne() {
        console.log('handleAddOne');
    }
    handleMinusOne() {
        console.log('handleMinusOne');
    }
    handleReset() {
        console.log('handleReset');
    }

    render(){
        return (
            <div>
                <h1>Count: 123</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));