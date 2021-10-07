const initializeSingleAccordion = (el) => {
  el.addEventListener('click', (e) => {
    const toggler = e.target.closest('.accordion__toggler')

    if (toggler) {
      const accordionItem = toggler.closest('.accordion__item')
      const accordionItemContent = accordionItem.querySelector('.accordion__content')

      if (accordionItem.classList.contains('--active')) {
        accordionItem.classList.remove('--active')

        const collapse = accordionItemContent.animate(
          [{ height: `${accordionItemContent.scrollHeight}px` }, { height: '0' }],
          {
            duration: 300,
          }
        )
        collapse.onfinish = () => (accordionItemContent.style.height = '')
        return
      }

      accordionItem.classList.add('--active')

      const expand = accordionItemContent.animate(
        [{ height: '0' }, { height: `${accordionItemContent.scrollHeight}px` }],
        { duration: 300 }
      )

      expand.onfinish = () => (accordionItemContent.style.height = '')
    }
  })

  const items = el.querySelectorAll('.accordion__item')

  items.forEach((item) => {
    const toggler = item.querySelector(".accordion__toggler")
    const activeLink = item.querySelector("a.active")

    if (activeLink && !item.classList.contains('--active')) {
      toggler.click()
    }
  })
  // el.querySelector('.accordion__toggler').click()
}

const initializeAllAccordions = () => {
  const accordions = document.querySelectorAll(
    '.accordion'
  )

  accordions.length > 0
    ? accordions.forEach((el) => {
        initializeSingleAccordion(el)
      })
    : null
}

initializeAllAccordions()