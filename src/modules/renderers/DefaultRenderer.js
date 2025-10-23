import { Renderer } from '@unseenco/taxi'

import Preloader from '../preloader'

export default class DefaultRenderer extends Renderer {
  initialLoad() {
    // run the first time a user enters a page
    console.log('initialLoad')

    const preloader = new Preloader()
    preloader.init().then(() => {
      console.log('Preloader finished, now entering page')
      this.onEnter()
      this.onEnterCompleted()
    })
  }

  onEnter() {
    console.log('on enter')

    requestAnimationFrame(() => {
      // Handle scroll first
      this.handleScroll()

      // Then update Webflow and GSAP
      this.updateDependencies()
    })
  }

  handleScroll() {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true })
      window.lenis.resize() // Lenis handles timing internally
    } else {
      window.scrollTo({ top: 0 })
    }
  }
  updateDependencies() {
    // Batch Webflow updates
    const webflow = window.Webflow || []
    if (webflow.length > 0) {
      webflow.forEach((wf) => {
        wf.destroy()
        wf.ready()
      })
    }

    // Defer GSAP updates
    setTimeout(() => {
      if (window.ScrollTrigger) {
        ScrollTrigger.refresh(true) // Deep refresh
      }

      /*if (typeof window.waitForGSAPready === 'function') {
        window.__GSAPreadyDispatched = false
        window.waitForGSAPready()
      }*/
    }, 100)
  }

  onEnterCompleted() {
    console.log('on enter completed')
  }

  onLeave() {
    console.log('on leave')
  }

  onLeaveCompleted() {
    console.log('on leave completed')

    // Kill all GSAP instances
    if (window.gsap) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      gsap.globalTimeline.kill()
      gsap.globalTimeline.clear()
      gsap.killTweensOf('*') // Kill all tweens
    }

    // Clear split text
    if (window.splitTextInstances?.length) {
      window.splitTextInstances.forEach((split) => split.revert())
      window.splitTextInstances = []
    }

    // Destroy Lenis
    // if (window.lenis) {
    //   window.lenis.destroy()
    //   window.lenis = null
    // }
  }
}
