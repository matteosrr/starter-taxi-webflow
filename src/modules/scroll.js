import gsap from 'gsap'
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

    // Ensure GSAP animations are in sync with Lenis' scroll frame updates.
    gsap.ticker.add((time) => {
      this.raf(time * 1000) // Convert GSAP's time to milliseconds for Lenis.
    })

    // Turn off GSAP's default lag smoothing to avoid conflicts with Lenis.
    gsap.ticker.lagSmoothing(0)
  }

  initRaf() {
    const raf = (time) => {
      this.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }
}

export default new Scroll()
