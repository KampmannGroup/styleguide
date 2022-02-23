document.addEventListener('DOMContentLoaded', function (event) {
  const progresses = document.querySelectorAll('.progress__status')

  if (progresses.length) {
    progresses.forEach((progress) => {
      let status = 0

      const load = setInterval(() => {
        status += 0.5

        if (status > 100) {
          clearInterval(load)
        } else {
          progress.setAttribute('aria-valuenow', status)
          progress.style.setProperty('--status', status)
        }
      }, 7)
    })
  }
})
