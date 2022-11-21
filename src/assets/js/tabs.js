export const tabs = (targetwrapper = document) => {
  const tabsContainer = targetwrapper.querySelectorAll('.tabs-container')

  if (tabsContainer.length > 0) {
    tabsContainer.forEach((tc) => {
      const tabsNav = tc.querySelector('.nav')

      const tabsNavHeight = tabsNav.clientHeight
      tc.style.setProperty('--nav-height', `${tabsNavHeight - 1}px`)

      const navWidth = tabsNav.scrollWidth
      const containerWidth = tc.scrollWidth

      if (navWidth > containerWidth) {
        tc.classList.add('tabs-container--scrollable')
      } else {
        tc.classList.remove('tabs-container--scrollable')
      }

      if (!tc.classList.contains('tabs-container--init')) {
        const tabsScroll = tc.querySelector('.tabs__navigation')
        let scrolling
        
        tabsScroll.addEventListener('mousedown', () => {
          scrolling = setInterval(() => {
            const position = tabsNav.scrollLeft
            tabsNav.scroll(position + 1, 0)
          }, 5)
        })

        document.querySelector('body').addEventListener('mouseup', () => {
          clearInterval(scrolling)
        })
      }

      tc.classList.add('tabs-container--init')
    })
  }
}
