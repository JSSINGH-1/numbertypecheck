import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {numbers: 0, numberType: 'Even'}

  randomNumber = () => {
    const ran = Math.ceil(Math.random() * 100)
    console.log(ran)

    this.setState({numbers: ran})
    if (ran % 2 === 0) {
      this.setState({numberType: 'Even'})
    } else {
      this.setState({numberType: 'Odd'})
    }
  }

  render() {
    const {numbers, numberType} = this.state
    return (
      <div className="container">
        <h1>Count {numbers}</h1>
        <p>Count is {numberType}</p>
        <button type="button" onClick={this.randomNumber}>
          Increment
        </button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
