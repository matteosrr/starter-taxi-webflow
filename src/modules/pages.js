import { Core } from '@unseenco/taxi'

import DefaultRenderer from './renderers/DefaultRenderer'
import DefaultTransition from './transitions/DefaultTransition'

export class Pages extends Core {
  constructor() {
    super({
      links: 'a:not([target]):not([href^=\\#]):not([data-taxi-ignore])',
      renderers: {
        default: DefaultRenderer,
      },
      transitions: {
        default: DefaultTransition,
      },
    })
  }
}
