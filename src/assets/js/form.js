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
      if (!wrapper.classList.contains('formelement__wrapper--active')) {
        wrapper.classList.add('formelement__wrapper--active')
      } else {
        if (wrapper.classList.contains('formelement__wrapper--select')) {
          wrapper.classList.remove('formelement__wrapper--active')
        }
      }
    })
  })
}

const selects = document.querySelectorAll('.formelement--select')

if (selects) {
  //Hide list on body click
  document.querySelector('body').addEventListener('click', (e) => {
    const select = e.target.closest('.formelement--select')
    if (!select) {
      selects.forEach((select) => {
        select.classList.remove('formelement--active')
      })
    }
  })

  selects.forEach((select) => {
    select.addEventListener('click', (e) => {
      const option = e.target.closest('.formelement__option:not(.formelement__option--selected)')
      const select = e.target.closest('.formelement--select')
      const wrapper = e.target.closest('.formelement__wrapper')
      const value = wrapper.querySelector('.formelement__value')
      const selected = wrapper.querySelector('.formelement__selected')

      if (option && value) {
        //Insert clicked option into selected area
        const clone = option.cloneNode(true)
        clone.classList.add('formelement__option--selected')

        selected.innerHTML = ''
        selected.append(clone)

        //Change hidden value
        value.value = option.dataset.value

        //Change select class to style ad active
        select.classList.remove('formelement--placeholder')
      }

      //Toggle showing options list
      if (select.classList.contains('formelement--active')) {
        select.classList.remove('formelement--active')
      } else {
        select.classList.add('formelement--active')
      }
    })
  })
}
