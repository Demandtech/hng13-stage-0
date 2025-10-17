'use strict'


const utcTime = document.querySelector('[data-testId="test-user-time"]')



const currentUtcTime = new Date().getTime()

function getCurrentTime() {
  const now = new Date()
  const hours = String(now.getUTCHours()).padStart(2, '0')
  const minutes = String(now.getUTCMinutes()).padStart(2, '0')
  const seconds = String(now.getUTCSeconds()).padStart(2, '0')
  const milliseconds = String(now.getUTCMilliseconds()).slice(0, 1)

  return `${hours}:${minutes}:${seconds}:${milliseconds}`
}

setInterval(() => {
  const currTime = getCurrentTime()
  utcTime.textContent = currTime
}, 1)