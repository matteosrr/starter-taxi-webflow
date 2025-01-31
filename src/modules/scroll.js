import Lenis from 'lenis'

export class Scroll extends Lenis {
  constructor() {
    super({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Start the animation frame loop
    this.initRaf()
  }

  initRaf() {
    const raf = (time) => {
      this.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }
}
