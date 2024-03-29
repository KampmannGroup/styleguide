import Swiper, { Navigation, Pagination, Autoplay, Controller } from 'swiper'
Swiper.use([Pagination, Autoplay, Navigation, Controller])

export const carousel = (target = document) => {
  //Carousel
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

  const carousels = target.querySelectorAll('.carousel')

  const autoplay = 5000
  const speed = 600

  if (carousels.length > 0) {
    carousels.forEach((slider, i) => {
      new Swiper(slider, {
        speed: speed,
        autoplay: {
          delay: autoplay,
          disableOnInteraction: false,
        },
        slidesPerView: 'auto',
        spaceBetween: 20,
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
      })
    })
  }
}
