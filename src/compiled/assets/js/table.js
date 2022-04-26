export const table = (targetwrapper = document) => {
  const tables = targetwrapper.querySelectorAll('.table')

  if (tables) {
    tables.forEach((table, index) => {
      const table_body = table.querySelector('tbody')

      //Mobile
      let isMobile = false

      const mobilizeTable = () => {
        if (window.innerWidth < 768) {
          if (!isMobile) {
            const table_heads = table.querySelectorAll('.table__head--title[data-target]')

            if (table_heads) {
              table_heads.forEach((table_head, index) => {
                const target = table_head.dataset.target
                const table_content_targets = table.querySelectorAll(`.table__content[data-target="${target}"]`)

                if (table_content_targets) {
                  table_content_targets.forEach((table_content, index) => {
                    const table_head_clone = table_head.cloneNode(true)
                    table_head_clone.classList.add('--mobile')

                    table_content.parentNode.insertBefore(table_head_clone, table_content)
                  })
                }
              })
            }

            isMobile = true
          }
        } else {
          const table_heads = table.querySelectorAll('.table__head.--mobile')

          if (table_heads) {
            table_heads.forEach((table_head) => {
              table_head.remove()
            })
          }

          isMobile = false
        }
      }
      window.addEventListener('load', mobilizeTable)
      window.addEventListener('resize', mobilizeTable)

      //Sorting
      table.addEventListener('click', (e) => {
        const table_head = e.target.closest('.table__head[data-target]')
        const table_sort = e.target.closest('.table__sort__item')

        if (table_head && table_sort) {
          if (table_sort.classList.contains('table__sort__item--active')) {
            return
          }

          const target = table_head.dataset.target
          const table_content_targets = table.querySelectorAll(`.table__content[data-target="${target}"]`)

          const array_table_content_targets = Array.prototype.slice.call(table_content_targets, 0)

          const table_sort_active = table.querySelector('.table__sort__item--active')

          if (table_sort_active) {
            table_sort_active.classList.remove('table__sort__item--active')
          }

          table_sort.classList.add('table__sort__item--active')

          if (e.target.closest('.table__sort__item--desc')) {
            array_table_content_targets.sort(function (a, b) {
              var aContent = a.innerText
              var bContent = b.innerText
              if (aContent < bContent) return 1
              if (aContent > bContent) return -1
              return 0
            })

            for (const [index, item] of array_table_content_targets.entries()) {
              const table_row = item.closest('.table__row')
              table_body.append(table_row)
            }
          } else if (e.target.closest('.table__sort__item--asc')) {
            array_table_content_targets.sort(function (a, b) {
              var aContent = a.innerText
              var bContent = b.innerText
              if (aContent > bContent) return 1
              if (aContent < bContent) return -1
              return 0
            })

            for (const [index, item] of array_table_content_targets.entries()) {
              const table_row = item.closest('.table__row')
              table_body.append(table_row)
            }
          }
        }
      })
    })
  }
}
