import React, { Component } from 'react'

class Counter extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
    super(props)
    this.state = {
      count: props.count
    }
  
}
   
  handleIncrement = () => {
    this.setState((prevState) => ({count: prevState.count + 1}));
  }

  handleDecrement = () => {
    this.setState((prevState) => ({count: prevState.count - 1}));
  }

  render() {
    return (
      <div >
        <br />
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleDecrement}>-</button>
        </div>
        <h3 style={{display: 'flex', justifyContent: 'center'}}>Count: {this.state.count} </h3>
        <br/>
        <p/>
      </div>  
    )
  }
}


export default Counter
