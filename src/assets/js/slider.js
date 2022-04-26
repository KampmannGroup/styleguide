import Swiper, { Navigation, Pagination, Autoplay, Controller } from 'swiper'
Swiper.use([Pagination, Autoplay, Navigation, Controller])

export const slider = (target = document) => {
  //slider
  var elem = {},
    process = {}

  const startProgress = (slider, i, autoplay, speed) => {
    let interval = 20,
      step = Math.floor((100 / ((autoplay + speed) / interval)) * 100) / 100,
      progressed,
      width

    if (slider.pagination && slider.pagination.bullets) {
      if (elem[i]) {
        elem[i].style.width = 0
      }
      elem[i] = slider.pagination.bullets[slider.realIndex].childNodes[0]

      clearInterval(process[i])

      width = 0
      progressed = 0.0

      process[i] = setInterval(() => {
        progressed = Math.round((progressed + step) * 100) / 100
        elem[i].style.width = progressed + '%'
      }, interval)
    }
  }

  const sliders = target.querySelectorAll('.slider')

  const autoplay = 5000
  const speed = 600

  if (sliders.length > 0) {
    sliders.forEach((slider, i) => {
      let options = {}

      if (slider.classList.contains('slider--teaser')) {
        options = {
          spaceBetween: 0,
          slidesPerView: 1,
        }
      }

      if (slider.classList.contains('slider--small')) {
        options = {
          spaceBetween: 20,
          slidesPerView: 'auto',
        }
      }

      new Swiper(slider, {
        speed: speed,
        autoplay: {
          delay: autoplay,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          renderBullet: (index, className) => {
            return `<div class="${className} navigation__dot"><span class="navigation__progress"></span></div>`
          },
          bulletClass: 'navigation__dot',
          bulletActiveClass: 'navigation__dot--active',
          clickable: true,
        },
        on: {
          init: (swiper) => startProgress(swiper, i, autoplay, speed),
          slideChange: (swiper) => startProgress(swiper, i, autoplay, speed),
        },
        ...options,
      })
    })
  }
}
