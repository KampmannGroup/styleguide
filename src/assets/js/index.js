import '../_scss/index.scss'
import * as bootstrap from 'bootstrap'

import './form'
import './navigation'
import './slider'
import './tooltip'
import './carousel'
import './card'
import './events'
import './table'
import './modal'
import { form } from './form.js'
import { navigation } from './navigation.js'
import { slider } from './slider.js'
import { tooltip } from './tooltip.js'
import { carousel } from './carousel.js'
import { card } from './card.js'
import { events } from './events.js'
import { tabs } from './tabs.js'
import { table } from './table.js'
import { progressbar } from './progressbar.js'
import { header } from './header.js'

const init = (target = document) => {
  header(target)
  form(target)
  navigation(target)
  progressbar(target)
  slider(target)
  table(target)
  tooltip(target)
  card(target)
  carousel(target)
  events(target)
  tabs(target)
}

document.addEventListener('DOMContentLoaded', () => {
  init(document)
})

window.addEventListener('ajaxLoaded', (e) => {
  if (e.detail && e.detail.target) {
    init(e.detail.target)
  }
})

window.addEventListener('resize', () => {
  tabs()
})

window.addEventListener('load', () => {
  tabs()
})
