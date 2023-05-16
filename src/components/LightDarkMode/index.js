// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isMode: false}

  onButtonEle = () => {
    this.setState(prevState => ({isMode: !prevState.isMode}))
  }

  render() {
    const {isMode} = this.state
    const modeStatus = isMode ? 'light-mode' : 'dark-mode'
    const buttonText = isMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="app-container">
        <div className={`container ${modeStatus}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            type="button"
            className="buttonEle"
            onClick={this.onButtonEle}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
