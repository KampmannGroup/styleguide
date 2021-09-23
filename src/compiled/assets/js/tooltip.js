

import Tooltip from 'bootstrap'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('klappt')
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
  })
})