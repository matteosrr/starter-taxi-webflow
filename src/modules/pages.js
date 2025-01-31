import { Core } from '@unseenco/taxi'

import DefaultRenderer from './renderers/DefaultRenderer'
import DefaultTransition from './transitions/DefaultTransition'

export class Pages extends Core {
  constructor() {
    super({
      removeOldContent: true,
      renderers: {
        default: DefaultRenderer,
      },
      transitions: {
        default: DefaultTransition,
      },
    })

    // Add routes for all pages to ensure transitions work both ways
    this.addRoute('.*', '.*', 'default')
  }
}
