// document.addEventListener('DOMContentLoaded', () => {
//   const datatable = new DataTable('.table--data-table', {
//     paging: false,
//     searching: false,
//     info: false,
//   })

//   const tables = document.querySelectorAll('.table--data-table')

//   if (tables.length) {
//     tables.forEach((table) => {
//       table.addEventListener('click', (e) => {
//         const sortitem = e.target.closest('.table__sort__item')

//         if (sortitem) {
//           e.preventDefault()
//           e.stopPropagation()

//           let order = 'asc'
//           if (sortitem.classList.contains('table__sort__item--desc')) {
//             order = 'desc'
//           }

//           const tablehead = e.target.closest('.table__head')
//           const column = Array.from(tablehead.parentNode.children).indexOf(tablehead)

//           const orderaimed = [column, order]

//           datatable.order(orderaimed).draw()
//         }
//       })
//     })
//   }
// })
