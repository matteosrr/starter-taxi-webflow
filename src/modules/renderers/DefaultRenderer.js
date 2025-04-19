import { Renderer } from '@unseenco/taxi'

import Preloader from '../preloader'

export default class DefaultRenderer extends Renderer {
  initialLoad() {
    // run the first time a user enters a page
    console.log('initialLoad')

    const preloader = new Preloader()
    preloader.init().then(() => {
      console.log('Preloader finished, now entering page')
      this.onEnter()
      this.onEnterCompleted()
    })
  }

  onEnter() {
    console.log('on enter')
  }

  onEnterCompleted() {
    console.log('on enter completed')
  }

  onLeave() {
    console.log('on leave')
  }

  onLeaveCompleted() {
    console.log('on leave completed')
  }
}
