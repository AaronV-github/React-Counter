class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            num: 0
        };

      this.increment=this.increment.bind(this);
      this.decrement=this.decrement.bind(this)
    }

    increment() {
        this.setState(state=>({
            num: state.num+1
        }));
    }

    decrement(){
        this.setState(state=>({
            num: state.num-1
        }))
    }

    render(){
        return(
            <div>
                <div class="container">
                <div class="d-flex justify-content-center">
                <p class="number">{this.state.num}</p>
                </div>
                <div class="d-flex justify-content-center">
                <button id="button" class="btn btn-lg col-4 p-5 btn-outline-dark" onClick={this.decrement}>-</button>
                <button id="button" class="btn btn-lg col-4 p-5 btn-block btn-outline-dark" onClick={this.increment}>+</button>
            </div>
            </div>
            </div>
        )
    }
    
}

ReactDOM.render(<Count />, document.getElementById('root'))

