import { Transition } from '@unseenco/taxi'
import gsap from 'gsap'

export default class DefaultTransition extends Transition {
  /**
   * Handle the transition leaving the previous page.
   * @param { { from: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  async onLeave({ from, trigger, done }) {
    console.log('transition:onLeave')

    // Animate all elements with [data-taxi] attribute
    await gsap.to('[data-taxi]', {
      autoAlpha: 0,
      duration: 1,
    })

    // alternative way to delay the transition manually
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    // Signal that the leave transition is finished
    done()
  }

  /**
   * Handle the transition entering the next page.
   * @param { { to: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  async onEnter({ to, trigger, done }) {
    console.log('transition:onEnter')

    // Animate all elements with [data-taxi] attribute
    await gsap.to('[data-taxi]', {
      autoAlpha: 1,
      duration: 1,
      ease: 'linear',
      delay: 0.5,
    })

    // alternative way to delay the transition manually
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    // Signal that the leave transition is finished
    done()
  }
}
