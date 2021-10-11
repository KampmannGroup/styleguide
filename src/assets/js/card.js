import Swiper, { Navigation, Pagination, Autoplay, Controller } from 'swiper'
Swiper.use([Pagination, Autoplay, Navigation, Controller])

import Tab from 'bootstrap'

document.addEventListener('DOMContentLoaded', function (event) {
  //Images
  new Swiper('.card__slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'disabled'
    },
  })

  //Tabs
  var triggerTabList = [].slice.call(document.querySelectorAll('.card__tab'))
  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
    })
  })
})
