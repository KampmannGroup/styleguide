/**
 * Open and animate menu on click on burger button (mobile)
 */
const burgers = document.querySelectorAll('.navigation__burger')

const NAV_DELAY = 600

if (burgers.length > 0) {
  burgers.forEach((burger) => {
    burger.addEventListener('click', (e) => {
      const el = e.target.closest('[data-navigation]')

      if (burger.classList.contains('--active')) {
        burger.classList.remove('--active')
      } else {
        burger.classList.add('--active')
      }

      if (el) {
        const navigation_selector = el.dataset.navigation
        const navigation_toggler = document.querySelector(navigation_selector)
        const navigation = navigation_toggler.closest('.navigation')

        if (navigation_toggler) {
          if (navigation.classList.contains('--active')) {
            const collapse = navigation_toggler.animate(
              [{ height: `${navigation_toggler.scrollHeight}px` }, { height: '0' }],
              {
                duration: NAV_DELAY,
              }
            )
            collapse.onfinish = () => {
              navigation_toggler.style.removeProperty('height')
              navigation.classList.remove('--active')
            }
            return
          }

          navigation.classList.add('--active')

          const expand = navigation_toggler.animate(
            [{ height: '0' }, { height: `${navigation_toggler.scrollHeight}px` }],
            { duration: NAV_DELAY }
          )

          expand.onfinish = () => navigation_toggler.style.removeProperty('height')
        }
      }
    })
  })
}

/**
 * Set subnavigation list active on click of subnavigation trigger
 */
const subnavigation_triggers = document.querySelectorAll('.navigation__subnavigation-trigger')

if (subnavigation_triggers.length > 0) {
  subnavigation_triggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      const navigation = e.target.closest('.navigation')
      const subnavigation = e.target.closest('.subnavigation')
      const trigger_wrapper = e.target.closest('[data-target]')

      if (trigger_wrapper) {
        const active_level = getComputedStyle(navigation).getPropertyValue('--active-level')

        navigation.style.setProperty('--active-level', parseInt(active_level) + 1)
        if (subnavigation) {
          const active_level_sub = getComputedStyle(subnavigation).getPropertyValue('--active-level')
          subnavigation.style.setProperty('--active-level', parseInt(active_level_sub) + 1)
        }

        const active_element_name = trigger_wrapper.dataset.target
        const active_element = navigation.querySelector(`[data-parent="${trigger_wrapper.dataset.target}"]`)

        if (active_element && window.innerWidth < 768) {
          active_element.classList.add('navigation__list--active')
        }
      }
    })
  })
}

/**
 * Check and jump to breadcrumb data level
 */
const level_breadcrumbs = document.querySelectorAll('[data-level]')

if (level_breadcrumbs.length > 0) {
  level_breadcrumbs.forEach((breadcrumb) => {
    breadcrumb.addEventListener('click', (e) => {
      const navigation = e.target.closest('.navigation')
      const subnavigation = e.target.closest('.subnavigation')

      let level = breadcrumb.dataset.level - 1
      if (window.innerWidth < 768) {
        level = breadcrumb.dataset.level
      }
      if (level < 0) {
        level = 0
      }

      navigation.style.setProperty('--active-level', parseInt(level))
      if (subnavigation) {
        subnavigation.style.setProperty('--active-level', parseInt(level))
      }
      const active_lists = navigation.querySelectorAll(
        `.navigation__list--active.navigation__list--level-${breadcrumb.dataset.level} .navigation__list--active`
      )

      if (active_lists) {
        active_lists.forEach((active_list) => {
          active_list.classList.remove('navigation__list--active')
        })
      }
    })
  })
}

const showAndHideSubNavEl = (el) => {}

/**
 * Hover effect with delay for better navigation on subnavigation elements AND
 * Set first element of subnav to active when hovering main nav element
 */
const subNavElements = document.querySelectorAll('.subnavigation .navigation__element')
const mainNavElements = document.querySelectorAll('.navigation--main .navigation__list--level-0 > .navigation__element')

if (mainNavElements.length > 0 && subNavElements.length > 0 && window.innerWidth >= 768) {
  let showNavigation

  const addListeners = (el) => {
    let hideNavigation

    el.addEventListener('mouseenter', (e) => {
      const target = e.currentTarget
      clearTimeout(hideNavigation)
      showNavigation = setTimeout(() => target.classList.add('isHovered'), NAV_DELAY)
    })
    el.addEventListener('mouseleave', (e) => {
      const target = e.currentTarget
      clearTimeout(showNavigation)
      hideNavigation = setTimeout(() => target.classList.remove('isHovered'), NAV_DELAY)
    })
  }

  subNavElements.forEach((el) => addListeners(el))

  mainNavElements.forEach((el) => {
    el.addEventListener('mouseenter', (e) => {
      const subnav = el.querySelector('.subnavigation')
      if (subnav) {
        const firstEl = subnav.querySelector('.navigation__element--first')
        showNavigation = setTimeout(() => firstEl.classList.add('isHovered'), NAV_DELAY)
      }
    })
  })
}

/**
 * Calculates and sets height of subnavigation
 */
const subnavigations = document.querySelectorAll('.subnavigation')

const calcAndSetSubnavHeight = () => {
  if (subnavigations.length > 0) {
    subnavigations.forEach((subnavigation) => {
      const subnavheight = window.innerHeight - document.querySelector('.header__wrapper').offsetHeight + 'px'
      subnavigation.style.height = subnavheight
    })
  }
}
window.addEventListener('load', calcAndSetSubnavHeight)
window.addEventListener('resize', calcAndSetSubnavHeight)
