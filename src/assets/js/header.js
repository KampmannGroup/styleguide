document.addEventListener('DOMContentLoaded', function (event) {
  const header = document.querySelector('header.header')
  const headerMeta = header.querySelector('.header__section--meta')
  const languageSwitch = header.querySelector('#language-switch')

  let oldValue = 0
  let newValue = 0
  let scrollPos = 0
  let direction = 'Down'
  let timer

  const checkScrollDirectionAndPosition = (e) => {
    newValue = window.pageYOffset
    window.clearTimeout(timer)

    if (oldValue === newValue) return

    if (oldValue < newValue) {
      direction = 'Down'
    } else if (oldValue > newValue) {
      direction = 'Up'
    }
    oldValue = newValue
    scrollPos = window.pageYOffset

    timer = setTimeout(setHeaderState, 50, direction, scrollPos)
  }

  const setHeaderState = (dir, pos) => {
    if (pos === 0 || languageSwitch.classList.contains('show') || dir === 'Up') {
      header.style.transform = 'translateY(0)'
      return
    }

    if (dir === 'Down' && pos > 0) {
      header.style.transform = `translateY(-${headerMeta.offsetHeight}px)`
      return
    }
  }

  window.addEventListener('scroll', (e) => checkScrollDirectionAndPosition(e))
})
