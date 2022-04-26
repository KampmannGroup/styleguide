// import '../_scss/index.scss'
// import bootstrap from 'bootstrap'

import { form } from './form.js'
// import { navigation } from './navigation.js'
// import { slider } from './slider.js'
// import { tooltip } from './tooltip.js'
// import { carousel } from './carousel.js'
// import { card } from './card.js'
// import { events } from './events.js'
// import { table } from './table.js'
// import './modal'
// import './accordion'
// import { progressbar } from './progressbar.js'

const init = (target = document) => {
  form(target)
  // navigation(target)
  // progressbar(target)
  // slider(target)
  // table(target)
  // tooltip(target)
  // card(target)
  // carousel(target) 
  // events(target)
}

document.addEventListener("DOMContentLoaded", ()=>{
  // init(document)
})

window.addEventListener('ajaxLoaded', (e)=>{
  init(e.detail.target)
})


const ajaxLoaded = new CustomEvent('ajaxLoaded', {
  detail: {
    target: document.querySelector('body')
  }
});

window.addEventListener('load',()=>{
  window.dispatchEvent(ajaxLoaded)
})