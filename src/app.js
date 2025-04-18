import { Pages } from './modules/pages'
import { Scroll } from './modules/scroll'

class App {
  constructor() {
    this.init()
  }

  init() {
    this.pages = new Pages()
    this.scroll = new Scroll()
  }
}

window.Webflow ||= []
window.Webflow.push(() => {
  new App()
})
