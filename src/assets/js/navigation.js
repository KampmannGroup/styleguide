const burgers = document.querySelectorAll('.navigation__burger')

if (burgers) {
  burgers.forEach((burger, index) => {
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
                duration: 300,
              }
            )
            // collapse.onfinish = () => (navigation_toggler.style.height = '0')
            collapse.onfinish = () => {
              navigation_toggler.style.removeProperty('height')
              navigation.classList.remove('--active')
            }
            return
          }

          navigation.classList.add('--active')

          const expand = navigation_toggler.animate(
            [{ height: '0' }, { height: `${navigation_toggler.scrollHeight}px` }],
            { duration: 300 }
          )

          // expand.onfinish = () => (navigation_toggler.style.height = 'auto')
          expand.onfinish = () => navigation_toggler.style.removeProperty('height')
        }
      }
    })
  })
}

const subnavigation_triggers = document.querySelectorAll('.navigation__subnavigation-trigger')

if (subnavigation_triggers) {
  subnavigation_triggers.forEach((trigger, index) => {
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

const level_breadcrumbs = document.querySelectorAll('[data-level]')

if (level_breadcrumbs) {
  level_breadcrumbs.forEach((breadcrumb, index) => {
    breadcrumb.addEventListener('click', (e) => {
      const navigation = e.target.closest('.navigation')
      const subnavigation = e.target.closest('.subnavigation')

      var level = breadcrumb.dataset.level - 1
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
        active_lists.forEach((active_list, index) => {
          active_list.classList.remove('navigation__list--active')
        })
      }
    })
  })
}

var subnavigations = document.querySelectorAll('.subnavigation')

const setHeaderHeight = () => {
  if (subnavigations) {
    subnavigations.forEach((subnavigation) => {
      // console.log(window.innerHeight)
      // console.log(document.querySelector('.header__wrapper').offsetHeight)

      const subnavheight = window.innerHeight - document.querySelector('.header__wrapper').offsetHeight + 'px'
      subnavigation.style.height = subnavheight
    })
  }
}
window.addEventListener('load', setHeaderHeight)
window.addEventListener('resize', setHeaderHeight)

const navigation_elements = document.querySelectorAll('.navigation__element')

if (navigation_elements) {
  navigation_elements.forEach((navigation_element, index) => {
    navigation_element.addEventListener('mouseover', (e) => {
      if (window.innerWidth >= 768) {
        var subnavigation = e.target.closest('.subnavigation')
        const element = e.target.closest('.navigation__element')

        if (element) {
          if (subnavigation) {
            const list = e.target.closest('.navigation__list')
            const list_children = element.querySelector('.navigation__list')
            var list_parents = []
            var list_parent = list

            do {
              list_parent = list_parent.parentNode.closest('.navigation__list')
              if (list_parent) {
                list_parents.push(list_parent)
              }
            } while (list_parent)

            const targets = list_parents
            targets.push(list)
            if (list_children) {
              targets.push(list_children)
            }

            // if(targets){
            //   var maxheight = 0
            //   targets.forEach((el, index)=>{
            //     if(el.scrollHeight > maxheight){
            //       maxheight = el.scrollHeight
            //     }
            //   })

            //   subnavigation.style.height = maxheight + "px"
            // }
          } else {
            // subnavigation = element.querySelector('.subnavigation')
            // if(subnavigation){
            //   subnavigation.style.height = subnavigation.querySelector('.navigation__list').scrollHeight + "px"
            // }
          }
        }
      }
    })
  })
}

const wrappers = document.querySelectorAll('.formelement__wrapper')

if (wrappers) {
  //Remove active class on body click
  document.querySelector('body').addEventListener('click', (e) => {
    const wrapper = e.target.closest('.formelement__wrapper')

    if (!wrapper) {
      wrappers.forEach((wrapper) => {
        wrapper.classList.remove('formelement__wrapper--active')
      })
    }
  })

  wrappers.forEach((wrapper) => {
    wrapper.addEventListener('click', (e) => {
      const wrapper = e.target.closest('.formelement__wrapper')
      //Toggle showing options list
      if (wrapper.classList.contains('formelement__wrapper--active')) {
        wrapper.classList.remove('formelement__wrapper--active')
      } else {
        wrapper.classList.add('formelement__wrapper--active')
      }
    })
  })
}
