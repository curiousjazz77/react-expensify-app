/*
We need to do the following:
1. Set up a default state object
2. Component rendered with default state values *
3. Change state based on event
4. Component re-rendered using new state values *
5. Start again at 3
 */

class Counter extends React.Component {

    constructor(props){
        super(props); //bare minimum if u want to override constructor behavior
        this.handleAddOne = this.handleAddOne.bind(this); //run once and not rebound over and over
        this.handleMinusOne = this.handleMinusOne.bind(this); //run once and not rebound over and over
        this.handleReset = this.handleReset.bind(this); //run once and not rebound over and over
        this.state = {
            count: 0,
            name: 'Julie'
        };
    }
    handleAddOne() {
        //call method on component instance to get it to change
        //can't simply do a reassignment of counter because component won't re-render
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            };
        });
        console.log('handleAddOne');
    }
    handleMinusOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count - 1
            };
        });
        console.log('handleMinusOne');
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
        }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));