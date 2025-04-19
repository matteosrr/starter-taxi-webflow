import { gsap } from 'gsap'

export default class Preloader {
  constructor() {
    // default duration of the prealoder animation timeline
    this.tl_duration = 1

    // Select the preloader wrapper element from the DOM
    this.preloader_wrapper = document.querySelector('.preloader-w')

    console.log('Preloader started')
  }

  /**
   * Initialize the preloader animation
   * Returns a Promise that resolves after the animation is complete
   */
  init() {
    return new Promise((resolve) => {
      window.scrollTo(0, 0)

      const preloader_tl = gsap
        .timeline({
          defaults: { ease: 'power2.out', duration: this.tl_duration },
          onComplete: () => {
            console.log('Preloader completed')
            this.preloader_wrapper.style.display = 'none'
            resolve()
          },
        })

        // Fade out the preloader wrapper with a delay of 3s
        .to(
          this.preloader_wrapper,
          {
            opacity: 0,
          },
          '>3' // Add a start delay of 3 seconds
        )
    })
  }
}
