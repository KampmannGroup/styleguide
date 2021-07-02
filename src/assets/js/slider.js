document.addEventListener('DOMContentLoaded', function (event) {
  const sliders = document.querySelectorAll('.slider')

  const adjustHeight = (slider) => {
    const slideFirst = slider.querySelector(`.slider__slide--active`)
    slider.style.height = slideFirst.offsetHeight + 'px'
  }

  const slide = (slider, slidesCount) => {
    const dotActive = slider.querySelector('.slider__dot--active')
    const slideActive = parseInt(dotActive.dataset.slide)
    const slideNext = slideActive == slidesCount ? 0 : slideActive + 1
    const dotNext = slider.querySelector(`.slider__dot[data-slide='${slideNext}']`)

    dotNext.click()
  }

  if (sliders) {
    sliders.forEach((slider, index) => {
      window.addEventListener('load', () => {
        adjustHeight(slider)
      })

      window.addEventListener('resize', () => {
        adjustHeight(slider)
      })

      const slides = slider.querySelectorAll('.slider__slide')
      const slideContent = slider.querySelector('.slide__content')
      const dotsWrapper = slider.querySelector('.slider__dots')
      const dots = slider.querySelectorAll('.slider__dot')
      const slidesCount = dots.length - 1

      //Autoplay
      var wait = setInterval(() => {
        slide(slider, slidesCount)
      }, 5000)

      //PauseOnHover
      const elemsToPauseOnHover = [slideContent, dotsWrapper]
      elemsToPauseOnHover.forEach((el, index) => {
        el.addEventListener('mouseover', (e) => {
          clearInterval(wait)
        })

        el.addEventListener('mouseout', (e) => {
          wait = setInterval(() => {
            slide(slider, slidesCount)
          }, 5000)
        })
      })

      //Navigation Click
      slider.addEventListener('click', (e) => {
        const dot = e.target.closest('.slider__dot')

        if (dot && !dot.classList.contains('slider__dot--active')) {
          slider.dispatchEvent(
            new CustomEvent('slidechange', {
              detail: {
                slideTarget: parseInt(dot.dataset.slide),
              },
            })
          )
        }
      })

      //Touch
      let touching = false
      let touchAmount = 0
      let touchMoveAmount = 0
      let touchMovePositionPrev = 0
      let touchStartPosition = 0

      slider.addEventListener('touchstart', (e) => {
        touchStartPosition = parseInt(getComputedStyle(slides[0]).getPropertyValue('margin-left'))
        clearInterval(wait)
        touchAmount = e.changedTouches[0].pageX
      })

      slider.addEventListener('touchmove', (e) => {
        if (!touching) {
          slides[0].style.setProperty('transition', 'none')
          touchMovePositionPrev = e.changedTouches[0].pageX
          touchMoveAmount = 0
        }
        touching = true

        touchMoveAmount = touchMoveAmount + (e.changedTouches[0].pageX - touchMovePositionPrev)
        touchMovePositionPrev = e.changedTouches[0].pageX

        slides[0].style.setProperty('margin-left', touchStartPosition + touchMoveAmount / 2 + 'px')
      })

      slider.addEventListener('touchend', (e) => {
        touching = false
        touchAmount = touchAmount - e.changedTouches[0].pageX
        const activeSlide = getComputedStyle(slider).getPropertyValue('--active-slide')

        slides[0].style.removeProperty('margin-left')
        slides[0].style.removeProperty('transition')

        if (touchAmount > 80) {
          slider.dispatchEvent(
            new CustomEvent('slidechange', {
              detail: {
                slideTarget: parseInt(activeSlide) + 1,
              },
            })
          )
        } else if (touchAmount < -80) {
          slider.dispatchEvent(
            new CustomEvent('slidechange', {
              detail: {
                slideTarget: parseInt(activeSlide) - 1,
              },
            })
          )
        } else {
          slider.dispatchEvent(
            new CustomEvent('slidechange', {
              detail: {
                slideTarget: parseInt(activeSlide),
              },
            })
          )
        }

        wait = setInterval(() => {
          slide(slider, slidesCount)
        }, 5000)
      })

      //Slidechange
      slider.addEventListener('slidechange', (e) => {
        if (e.detail.slideTarget > slides.length - 1) {
          e.detail.slideTarget = 0
        } else if (e.detail.slideTarget < 0) {
          e.detail.slideTarget = slides.length - 1
        }

        //Navigation Change
        const dotPrevActive = slider.querySelector('.slider__dot--active')
        dotPrevActive.classList.remove('slider__dot--active')

        const dotActive = slider.querySelector(`.slider__dot[data-slide="${e.detail.slideTarget}"]`)
        dotActive.classList.add('slider__dot--active')

        //Slide Change
        const slidePrevActive = slider.querySelector('.slider__slide--active')
        slidePrevActive.classList.remove('slider__slide--active')

        const slideActive = slider.querySelector(`.slider__slide[data-slide="${e.detail.slideTarget}"]`)
        slideActive.classList.add('slider__slide--active')

        //Slider Growth
        slider.style.height = slideActive.offsetHeight + 'px'
        //Slider Position
        slider.style.setProperty('--active-slide', e.detail.slideTarget)
      })
    })
  }
})
