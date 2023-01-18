export const form = (target = document)=>{
  const wrappers = target.querySelectorAll('.formelement__wrapper')

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
  
  const selects = target.querySelectorAll('.formelement--select:not(.formelement--init)')
  
  if (selects) {
    //Hide list on body click
    document.querySelector('body').addEventListener('click', (e) => {
      const selectclicked = e.target.closest('.formelement--select')
    
      selects.forEach((select) => {
        if ((selectclicked && select != selectclicked) || !selectclicked) {
          select.classList.remove('formelement--active')
        }
      })
    })
  
    selects.forEach((select) => {
      select.classList.add('formelement--init')
      const placeholder = select.querySelector('.formelement__option--placeholder')
        
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
  
          //Multiselect
          if (select.classList.contains('formelement--select-multi')) {
            //Add active class
            if (option.classList.contains('formelement__option--active')) {
              option.classList.remove('formelement__option--active')
              select.querySelector(`.formelement__option--selected[data-value="${option.dataset.value}"]`).remove()
            } else {
              option.classList.add('formelement__option--active')
              selected.append(clone)
            }
            const optionsactive = select.querySelectorAll('.formelement__option--active')
  
            if (!optionsactive.length) {
              selected.append(placeholder)
              value.value = ''
              
              //Change select class to style ad active
              select.classList.add('formelement--placeholder')
            } else {
              placeholder.remove()
              const optionsselected = select.querySelectorAll('.formelement__option--selected')
  
              const selectedvalues = []
              optionsselected.forEach((optionselected) => {
                selectedvalues.push(optionselected.dataset.value)
              })
  
              value.value = selectedvalues.join(', ')
  
              //Change select class to style ad active
              select.classList.remove('formelement--placeholder')
            }
  
            if (e.target.closest(".formelement__options")) {
              return
            }
          }
          //Normal Select
          else {
            selected.innerHTML = ''
  
            //Change hidden value
            value.value = option.dataset.value
            selected.append(clone)
          }
  
  
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
  
}