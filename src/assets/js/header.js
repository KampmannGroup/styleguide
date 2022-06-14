document.addEventListener('DOMContentLoaded', function (event) {
  const header = document.querySelector('header.header')
  const headerMeta = header.querySelector('.header__section--meta')
  const meta = header.querySelector('.header__section--meta')
  const metaHeight = meta.offsetHeight
  const main = header.querySelector('.header__section--main')
  const mainHeight = main.offsetHeight
  const thirdNav = document.querySelector('[data-navigation="onpage"]')
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
    const meta = header.querySelector('.header__section--meta')
    if (pos === 0 || languageSwitch.classList.contains('show') || dir === 'Up') {
      meta.style.marginTop = ''
      if (thirdNav) {
        thirdNav.style.top = `${mainHeight + metaHeight - 1}px`
      }
      return
    }

    if (dir === 'Down' && pos > 0) {
      meta.style.marginTop = `-${metaHeight + 1}px`
      if (thirdNav) {
        thirdNav.style.top = `${mainHeight - 2}px`
      }
      return
    }
  }
  if (thirdNav) {
    thirdNav.style.top = `${mainHeight - 2}px`
  }

  window.addEventListener('scroll', (e) => checkScrollDirectionAndPosition(e))
})
