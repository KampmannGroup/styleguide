import { Tooltip } from 'bootstrap'

export const tooltip = (target = document)=>{
  target.addEventListener('DOMContentLoaded', function (event) {
    const tooltipTriggerList = [].slice.call(target.querySelectorAll('[data-bs-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl)
    })
  })
}