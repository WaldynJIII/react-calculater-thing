class EnterNumber extends Component {
    constructor(props) {
        super(props);
        this.state = ''
        
    }
    addValue = (event) => {
        // Stop the page from refreshing
        event.preventDefault();
        console.log(`${this.state.firstName} is 
                     famous for ${this.state.role}`);
        // Next step is to pass this up to App.js
        let newValue = { 
            num: this.state,
            funk: 'p'
        }
        // Call the function in App.js
        this.props.numberX(newValue);
    }
    subtractValue = (event) => {
        // Stop the page from refreshing
        event.preventDefault();
        console.log(`${this.state.firstName} is 
                     famous for ${this.state.role}`);
        // Next step is to pass this up to App.js
        let newValue = {
            num: this.state,
            funk: 'm'
        }
        // Call the function in App.js
        this.props.numberX(newValue);
    }
    onValue = (event) => {
        this.setState(event.target.value,);
    }
    render() {
        console.log(this.state);
        // return JSX
        return (
            // enclosing element
            <form onUp={this.addValue} onDown={subtractValue}>
                <input onChange={this.onValue}  type="number" placeholder="value" />
                <button type="Down">Down</button>
                <button type="Up">Up</button>
            </form>
        );
    }
}