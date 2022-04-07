import Swiper, { Navigation, Pagination, Autoplay, Controller } from 'swiper'
import { Tab } from 'bootstrap'
import Masonry from 'masonry-layout'

Swiper.use([Pagination, Autoplay, Navigation, Controller])

document.addEventListener('DOMContentLoaded', function (event) {
  //Images
  new Swiper('.card__slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'disabled',
    },
  })

  //Tabs
  var triggerTabList = [].slice.call(document.querySelectorAll('.card__tab'))
  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
    })
  })
})
