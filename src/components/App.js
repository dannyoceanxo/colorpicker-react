import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: 180,
    saturation: 50,
    lightness: 69,
    alpha: 0.5
  }

  updateColor = () => {
    let color
  }
  handleHueChange = (event) => {
    this.setState({
      hue: event.target.value
    })
  }
  handleSaturationChange= (event) => {
    this.setState({
      saturation: event.target.value
    })
  }
  handleLightnessChange= (event) => {
    this.setState({
      lightness: event.target.value
    })
  }
  handleAlphaChange= (event) => {
    this.setState({
      alpha: event.target.value
    })
  }
  render () {
    return <div className='App'>
      <div className='colorpicker' />
      <h1>Colorpicker Dirty Sprite 2</h1>
      <div className='box'>
        <div className='boxdisplay' style={{backgroundColor: `hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})`}} />
      </div>
      <div className='text' />
      <div className='hue'><p>Hue</p><input name='hue' type='range' min='0' max='360' onInput={this.handleHueChange} /></div>
      <div className='saturation'><p>Saturation</p> <input name='saturation' type='range' min='0' max='100' onInput={this.handleSaturationChange} /></div>
      <div className='lightness'><p>Lightness</p> <input name='lightness' type='range' min='0' max='100' onInput={this.handleLightnessChange} /></div>
      <div className='alpha'><p>Alpha</p><input name='alpha' type='range' min='0' max='1' step='0.01' onInput={this.handleAlphaChange} /></div>
    </div>
  }
}

export default App
