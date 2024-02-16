// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isClicked: false,
    btnContent: 'Light Mode',
    backgroundColor: 'blackColor',
  }

  onChangeState = () => {
    const {isClicked} = this.state
    if (isClicked === false) {
      this.setState({
        isClicked: true,
        btnContent: 'Light Mode',
        buttonColor: 'whiteColor',
        backgroundColor: 'darkbg',
      })
    } else {
      this.setState({
        isClicked: false,
        btnContent: 'Dark Mode',
        buttonColor: 'blackColor',
        backgroundColor: 'lightbg',
      })
    }
  }

  render() {
    const {btnContent, backgroundColor, buttonColor} = this.state

    return (
      <div className="bgContainer">
        <div className={backgroundColor}>
          <h1 className="head">Click To Change Mode</h1>
          <button
            type="button"
            onClick={this.onChangeState}
            className={buttonColor}
          >
            {btnContent}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
