document.addEventListener('DOMContentLoaded', function (event) {
  const tabsContainer = document.querySelectorAll('.tabs-container')

  if (tabsContainer.length > 0) {
    tabsContainer.forEach((tc) => {
      const tabsNavHeight = tc.querySelector('.nav-tabs').clientHeight
      tc.style.setProperty('--nav-height', `${tabsNavHeight - 1}px`)
    })
  }
})
