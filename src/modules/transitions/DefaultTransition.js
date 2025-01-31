import { Transition } from '@unseenco/taxi'
import gsap from 'gsap'

export default class DefaultTransition extends Transition {
  onLeave({ from, trigger, done }) {
    console.log('transition leave')

    const loader = document.querySelector('.js-loader')

    gsap.set(loader, {
      opacity: 0,
    })

    gsap.to(loader, {
      opacity: 1,
      onComplete: () => {
        done()
      },
    })
  }

  onEnter({ to, trigger, done }) {
    console.log('transition enter')

    const loader = document.querySelector('.js-loader')

    gsap.set(loader, {
      opacity: 1,
    })

    gsap.to(loader, {
      opacity: 0,
      onComplete: () => {
        console.log('transition resolved')
        done()
      },
    })
  }
}
