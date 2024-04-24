import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeTextInput = event => {
    const {length} = event.target.value
    this.setState({count: length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="textInput" className="paragraph">
            Enter the phrase
          </label>
          <input
            id="textInput"
            type="text"
            placeholder="Enter the phrase"
            className="text-input"
            onChange={this.onChangeTextInput}
          />
          <p className="counting-letters">No.of letters: {count}</p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calculator-icon"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
