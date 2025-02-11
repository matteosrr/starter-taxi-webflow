import { Renderer } from '@unseenco/taxi'

export default class DefaultRenderer extends Renderer {
  initialLoad() {
    // run the first time a user enters a page
    console.log('initialLoad')
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
