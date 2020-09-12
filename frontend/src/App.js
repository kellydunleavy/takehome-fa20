import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState((prevState) => ({restaurants: [...prevState.restaurants, {id: this.state.restaurants.length, name: this.element.value, rating: 0}]}))
  }



  render() {
    return (
      <div className="App">
        <Instructions complete={true}/>
        {this.state.restaurants.map(x => (
          <Restaurant id={x.id} name={x.name} rating={x.rating} />
        ))}
        <form type="button" onSubmit={this.handleSubmit}>
          <label>
            <input type="text" ref={el => this.element = el}/>
          </label>
          <input type="submit" value="Submit" />
        </form>


      </div>
    )
  }
  

}

export default App


