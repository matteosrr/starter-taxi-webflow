import { gsap } from 'gsap'

export default class Preloader {
  constructor() {
    this.duration = 1
    this.preloader_wrapper = document.querySelector('.preloader-w')
    console.log(this.preloader_wrapper)

    console.log('Preloader started')
  }

  init() {
    return new Promise((resolve) => {
      window.scrollTo(0, 0)

      const preloader_tl = gsap
        .timeline({
          defaults: { ease: 'power2.out', duration: this.duration },
          onComplete: () => {
            console.log('Preloader completed')
            this.preloader_wrapper.style.display = 'none'
            resolve()
          },
        })

        /* fade out preloader wrapper */
        .to(
          this.preloader_wrapper,
          {
            opacity: 0,
          },
          '>3'
        )
    })
  }
}
