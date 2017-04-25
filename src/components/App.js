import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store'

@observer
class App extends Component {
  handleHueChange = (event) => {
    store.hue = event.target.value
  }
  handleSaturationChange= (event) => {
    store.saturation = event.target.value
  }
  handleLightnessChange= (event) => {
    store.lightness = event.target.value
  }
  handleAlphaChange= (event) => {
    store.alpha = event.target.value
  }
  render () {
    return <div className='App'>
      <div className='colorpicker' />
      <h1>Colorpicker Dirty Sprite 2</h1>
      <div className='box'>
        <div className='boxdisplay' style={{backgroundColor: store.color}} />
      </div>
      <div className='text'>{store.color}</div>
      <div className='hue'><p>Hue</p><input name='hue' type='range' min='0' max='360' onInput={this.handleHueChange} /></div>
      <div className='saturation'><p>Saturation</p> <input name='saturation' type='range' min='0' max='100' onInput={this.handleSaturationChange} /></div>
      <div className='lightness'><p>Lightness</p> <input name='lightness' type='range' min='0' max='100' onInput={this.handleLightnessChange} /></div>
      <div className='alpha'><p>Alpha</p><input name='alpha' type='range' min='0' max='1' step='0.01' onInput={this.handleAlphaChange} /></div>
    </div>
  }
}

export default App
