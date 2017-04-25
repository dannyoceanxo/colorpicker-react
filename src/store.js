import { observable, computed } from 'mobx'

class Store {
  @observable hue = 180
  @observable saturation = 50
  @observable lightness = 69
  @observable alpha = 0.5

  @computed
  get color () {
    return `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha})`
  }
}
const store = new Store()

export default store
