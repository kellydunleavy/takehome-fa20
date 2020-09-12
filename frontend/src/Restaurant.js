import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  // YOUR CODE GOES BELOW

  
  render() {
    return (
      <div style={{border: '5px solid black', margin: 50}} >
        <h3 style={{display: 'flex', justifyContent: 'center'}} >Restaurant: {this.props.name} </h3>
        <Counter count={this.props.rating}/>
      </div> 
    )
  }
}

export default App
