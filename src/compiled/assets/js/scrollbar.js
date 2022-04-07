document.addEventListener('DOMContentLoaded', function (event) {
  const scrollbars = document.querySelectorAll('.scrollbar--to-active')

  if(!scrollbars.length){
    return
  }

  scrollbars.forEach(scrollbar=>{
    const scrollbar_items = scrollbar.childNodes

    if(!scrollbar_items){
      return 
    }

    scrollbar_items.forEach(scrollbar_item=>{
      scrollbar_item.addEventListener('click', (e)=>{
        scrollbar.scrollTo({
          left: scrollbar_item.offsetLeft,
          behavior: 'smooth'
        })
      })
    })
  })
})
