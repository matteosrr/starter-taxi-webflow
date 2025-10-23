//import { gsap } from 'gsap'

export default class Preloader {
  constructor() {
    // default duration of the prealoder animation timeline
    this.tlDuration = 1

    // Select the preloader wrapper element from the DOM
    this.preloaderWrapper = document.querySelector('.preloader-w')

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
          defaults: { ease: 'power2.out', duration: this.tlDuration },
          onComplete: () => {
            console.log('Preloader completed')
            this.preloaderWrapper.style.display = 'none'
            resolve()
          },
        })

        // Fade out the preloader wrapper with a delay of 3s
        .to(
          this.preloaderWrapper,
          {
            opacity: 0,
          },
          '>3' // Add a start delay of 3 seconds
        )
    })
  }
}
