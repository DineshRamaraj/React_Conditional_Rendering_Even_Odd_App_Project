// Write your code here

import {Component} from 'react'
import './index.css'

class MyComponent extends Component {
  state = {number: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const mathRandom = this.getRandomNumber()
    this.setState(prevState => ({number: prevState.number + mathRandom}))
  }

  render() {
    const {number} = this.state
    const numberType = number % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Count {number}</h1>
          <p className="number-identity">Count is {numberType}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default MyComponent
