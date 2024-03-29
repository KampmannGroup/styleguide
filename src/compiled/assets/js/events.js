import Swiper, { Navigation, Pagination, Autoplay, Controller, EffectFade } from 'swiper'
Swiper.use([Pagination, Autoplay, Navigation, Controller, EffectFade])

export const events = (target = document) => {
  new Swiper('.events', {
    // effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletClass: 'navigation__dot',
      bulletActiveClass: 'navigation__dot--active',
      clickable: true,
    },
  })
}
