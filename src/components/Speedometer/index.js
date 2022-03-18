import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      const prevSpeed = prevState.speed

      if (prevSpeed < 200) {
        return {speed: prevState.speed + 10}
      }
      return {speed: 200}
    })
  }

  onApplyBrake = () => {
    this.setState(prevState => {
      const prevSpeed = prevState.speed

      if (prevSpeed > 0) {
        return {speed: prevState.speed - 10}
      }
      return {speed: 0}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <div>
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image"
          />
          <h1 className="speed-status">Speed is {speed}mph</h1>
          <p className="speed-limit">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              type="button"
              className="button button-1"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="button button-2"
              onClick={this.onApplyBrake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
